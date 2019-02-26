import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import SelectedItem from './SelectedItem'
import * as Actions from '../../search/actions'
import { SearchItemType } from '../../search/items'
import { localize } from '../../locale/localize'

require('../../styles/search/index.scss')

@localize
class SearchComponent extends Component {
    selectedPosition = 0;
    searchInputEl = React.createRef();

    state = {
        input: '',
        selectedSuggestion: -1,
    }

    onSearchChange = (ev) => {
        const text = ev.currentTarget.value;

        this.setState({ input: text, selectedSuggestion: -1 });
        this.props.onChange(text);
    }

    onCitySelect = (item) => {
        if (item.type === SearchItemType.Location) {
            this.setState({ selectedSuggestion: this.props.items.indexOf(item) });
            this.props.onSelect(item.location);
        }
    }

    handleKeyboard = (ev) => {
        switch (ev.keyCode) {
            case KEYS.ENTER: {
                const item = this.props.items[this.state.selectedSuggestion];
                if (item)
                    this.onCitySelect(item);
                break;
            }
            case KEYS.UP:
                if (this.state.selectedSuggestion > 0)
                    this.onSelectedChange(-1);
                break;

            case KEYS.DOWN:
                if (this.state.selectedSuggestion < this.props.items.length - 1)
                    this.onSelectedChange(1);
                break;

            case KEYS.ESC:
                if (this.props.selected)
                    this.onClear();
                break;

        }
    }

    onSelectedChange = (diff) => {
        this.setState({ selectedSuggestion: this.state.selectedSuggestion + diff });
    }

    onClear = () => {
        if (this.searchInputEl.current) {
            this.searchInputEl.current.focus();
            this.setState({ input: '' });
            this.props.onClear();
        }
    }

    render() {
        return (
            <div className={['search-container-wrap', this.props.className].join(' ')}>
                <div className="search-container">
                    <SelectedItem
                        selected={this.props.selected}
                        position={this.selectedPosition}
                        onClear={this.onClear}
                    />
                    <SearchInput
                        input={this.state.input}
                        isFetching={this.props.isFetching}
                        locale={this.props.locale}
                        searchInputRef={this.searchInputEl}
                        onSearchChange={this.onSearchChange}
                        onClear={this.onClear}
                        disabled={!!this.props.selected}
                        handleKeyboard={this.handleKeyboard}
                        onSelectedChange={this.onSelectedChange}
                    >
                        <SearchResults
                            items={this.props.items}
                            hidden={!!this.props.selected}
                            selectedSuggestion={this.state.selectedSuggestion}
                            locale={this.props.locale}
                            onSelect={this.onCitySelect}
                        />
                    </SearchInput>
                </div>
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
        clearAll: () => {
            dispatch({
                type: Actions.SEARCH_CLEAR_ALL
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

const KEYS = {
    'ENTER': 13,
    'ESC': 27,
    'UP': 38,
    'DOWN': 40,
}
