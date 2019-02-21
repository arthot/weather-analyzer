import React, { PureComponent } from 'react'
import classNames from 'classnames'
import i18n from 'es2015-i18n-tag'
import PropTypes from 'prop-types'

const propTypes = {
    onSearchChange: PropTypes.func.isRequired,
    onSelectedChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default class SearchInput extends PureComponent {

    handleKeyboard = (ev) => {
        if (ev.keyCode === 13) { // ENTER
            this.onCitySelect(this.props.items[this.state.selectedItem]);
        } else if (ev.keyCode === 38 && this.state.selectedItem > 0) { // UP
            this.props.onSelectedChange(-1);
        } else if (ev.keyCode === 40 && this.state.selectedItem < this.props.items.length - 1) { // DOWN
            this.props.onSelectedChange(1);
        } else if (ev.keyCode === 27 && this.props.selected) { // ESC
            this.props.onClear();
        }
    }

    render() {
        return (
            <div className="search-box">
                <input
                    value={this.props.input}
                    onChange={this.props.onSearchChange}
                    onKeyDown={this.handleKeyboard}
                    ref={this.props.searchInput}
                    placeholder={i18n`Search a place`}
                    className={classNames('search-input', {
                        'search-input__loading': this.props.isFetching,
                    })}
                    type="text"
                />
                <i className={classNames('fa fa-search fa-2x search-input-icon', {
                    'search-input-icon__loading': this.props.isFetching,
                })} />
                {this.props.children}
            </div>
        )
    }
}

SearchInput.propTypes = propTypes;

