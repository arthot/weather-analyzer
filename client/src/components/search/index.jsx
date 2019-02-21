import React, { Component } from 'react'
import classNames from 'classnames'
import update from 'immutability-helper'
import { connect } from 'react-redux'

import MonthSelector from './MonthSelector'
import SearchInput from './SearchInput'
import { SearchResults } from './search-result'
import { SelectedItem } from './selected-item'
import * as Actions from '../../search/actions'
import { SearchItemType } from '../../search/items'
import { localize } from '../../locale/localize'

require('../../styles/search.scss')

@localize
class SearchComponent extends Component {
    selectedPosition = 8;
    searchInput = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            chosen: !!this.props.selected,
            input: '',
            selectedItem: -1,
        };
    }

    componentWillReceiveProps(next, state) {
        this.setState({
            chosen: this.state.chosen || !!next.selected,
            selectedItem: state.input !== this.state.input ? -1 : this.state.selectedItem,
        });
    }

    onSearchChange = (ev) => {
        this.setState(update(this.state, { $set: { input: ev.currentTarget.value } }));
        this.props.onChange(ev.currentTarget.value);
    }

    onCitySelect = (item, coords) => {
        if (item.type === SearchItemType.Location) {
            const city = (item).location;
            this.props.onSelect(city);
        }

        if (coords)
            this.selectedPosition = coords.top;
    }

    onSelectedChange = (diff) => {
        this.setState({ selectedItem: this.state.selectedItem + diff });
    }

    onClear = () => {
        if (this.searchInput.current) {
            this.searchInput.current.focus();
            this.props.onClear();
        }
    }

    render() {
        return (
            <div className={classNames('search-container', {
                'chosen': this.state.chosen,
            })}>
                <SelectedItem
                    selected={this.props.selected}
                    position={this.selectedPosition}
                    onClear={this.onClear}
                />
                <MonthSelector
                    month={this.props.month}
                    selected={this.props.selected}
                    locale={this.props.locale}
                    onSelect={this.props.onMonthSelect}
                />
                <SearchInput
                    input={this.state.input}
                    isFetching={this.props.isFetching}
                    locale={this.props.locale}
                    searchInput={this.searchInput}
                    onSearchChange={this.onSearchChange}
                    onClear={this.onClear}
                    handleKeyboard={this.handleKeyboard}
                    onSelectedChange={this.onSelectedChange}
                >
                    <SearchResults
                        items={this.props.items}
                        hidden={!!this.props.selected}
                        selected={this.state.selectedItem}
                        locale={this.props.locale}
                        onSelect={this.onCitySelect}
                    />
                </SearchInput>
            </div>
        )
    }
}

export default connect(
    (state, own) => Object.assign(state.search, own),
    (dispatch) => ({
        onChange: (text) => {
            dispatch({
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
            dispatch({
                type: Actions.SEARCH_MONTH_SELECT,
                payload: { month }
            });
        },
        onSelect: (city) => {
            dispatch({
                type: Actions.SEARCH_CITY_SELECT,
                payload: { city }
            });
        },
    })
)(SearchComponent);
