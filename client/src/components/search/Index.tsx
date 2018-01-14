import classNames from 'classnames'
import i18n from 'es2015-i18n-tag'
import update from 'immutability-helper'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { City } from 'src/common/city'
import { MonthSelector } from 'src/components/search/month-selector'
import { SearchResults } from 'src/components/search/search-result'
import { SelectedItem } from 'src/components/search/selected-item'
import { IAppStore } from 'src/reducers'
import * as Actions from 'src/search/actions'
import { LocationSearchItem, SearchItem, SearchItemType } from 'src/search/items'
import { ISearchStore } from 'src/search/reducer'
require('src/styles/search.less')

class SearchComponent extends Component<ISearchProps, ISearchState> {
    selectedPosition: number = 8;
    searchInput: HTMLInputElement | null;

    constructor(props) {
        super(props);
        this.state = {
            chosen: !!this.props.selected,
            input: '',
            selectedItem: -1,
        };
    }

    componentWillReceiveProps(next: ISearchProps, state: ISearchState) {
        this.setState({
            chosen: this.state.chosen || !!next.selected,
            selectedItem: state.input !== this.state.input ? -1 : this.state.selectedItem,
        });
    }
    onSearchChange(ev: React.KeyboardEvent<HTMLInputElement>) {
        this.setState(update(this.state, { $set: { input: ev.currentTarget.value } }));
        this.props.onChange(ev.currentTarget.value);
    }
    onCitySelect = (item: SearchItem, coords?: ClientRect) => {
        if (item.type === SearchItemType.Location) {
            const city = (item as LocationSearchItem).location;
            this.props.onSelect(city);
        }

        if (coords)
            this.selectedPosition = coords.top;
    };

    onClear() {
        if (this.searchInput) {
            this.searchInput.focus();
            this.props.onClear();
        }
    }
    handleKeyboard(ev: React.KeyboardEvent<HTMLInputElement>) {
        if (ev.keyCode === 13) { // ENTER
            this.onCitySelect(this.props.items[this.state.selectedItem]);
        } else if (ev.keyCode === 38 && this.state.selectedItem > 0) { // UP
            this.setState({ selectedItem: this.state.selectedItem - 1, chosen: this.state.chosen });
        } else if (ev.keyCode === 40 && this.state.selectedItem < this.props.items.length - 1) { // DOWN
            this.setState({ selectedItem: this.state.selectedItem + 1, chosen: this.state.chosen });
        } else if (ev.keyCode === 27 && this.props.selected) {
            this.onClear();
        }
    }
    render() {
        return (
            <div className={classNames({
                'chosen': this.state.chosen,
                'search-container': true,
            })}>
                <SelectedItem
                    selected={this.props.selected}
                    onClear={this.onClear.bind(this)}
                    position={this.selectedPosition} />
                <MonthSelector
                    month={this.props.month}
                    onSelect={this.props.onMonthSelect}
                    selected={this.props.selected} />
                <div className="search-box">
                    <input value={this.state.input}
                        onChange={this.onSearchChange.bind(this)}
                        onKeyDown={this.handleKeyboard.bind(this)}
                        ref={el => this.searchInput = el}
                        placeholder={i18n`Search a place`}
                        className={classNames({
                            'search-input': true,
                            'search-input__loading': this.props.isFetching,
                        })}
                        type="text" />
                    <i className={classNames({
                        'fa fa-search fa-2x search-input-icon': true,
                        'search-input-icon__loading': this.props.isFetching,
                    })} />
                    <SearchResults
                        onSelect={this.onCitySelect}
                        items={this.props.items}
                        hidden={!!this.props.selected}
                        selected={this.state.selectedItem} />
                </div>
            </div>
        )
    }
}

export const Search = connect<ISearchStore, ISearchFunc, React.Props<any>, IAppStore>(
    (state, own) => Object.assign(state.search, own),
    (dispatch) => ({
        onChange: (text) => {
            dispatch<Actions.IChangeSearchInput>({
                type: Actions.SEARCH_INPUT_CHANGED,
                payload: { text }
            })
        },
        onClear: () => {
            dispatch({
                type: Actions.SEARCH_CITY_CLEAR
            });
        },
        onMonthSelect: (month) => {
            dispatch<Actions.ISelectMonth>({
                type: Actions.SEARCH_MONTH_SELECT,
                payload: { month }
            });
        },
        onSelect: (city) => {
            dispatch<Actions.ISelectCity>({
                type: Actions.SEARCH_CITY_SELECT,
                payload: { city }
            });
        },
    })
)(SearchComponent);

interface ISearchState {
    selectedItem: number;
    chosen: boolean;
    input: string;
}

interface ISearchFunc {
    onChange(text: string);
    onClear();
    onMonthSelect(month: number);
    onSelect(item: City);
}

type ISearchProps = ISearchStore & ISearchFunc;
