import React, { PureComponent } from 'react'
import i18n from 'es2015-i18n-tag'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import SearchIcon from '-!svg-react-loader?name=SearchIcon!../../images/search.svg';
import FetchingIcon from '-!svg-react-loader?name=FetchingIcon!../../images/sunny.svg';

const propTypes = {
    onSearchChange: PropTypes.func.isRequired,
    onSelectedChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default class SearchInput extends PureComponent {
    render() {
        return (
            <div className="search-box-wrap">
                <div className={classNames({
                    'search-box__hidden': this.props.disabled
                })}>
                    {!this.props.isFetching && (
                        <SearchIcon className="search-input-icon" />
                    )}
                    {!!this.props.isFetching && (
                        <FetchingIcon className="search-input-icon icon-rotate" />
                    )}
                    <input
                        value={this.props.input}
                        autoFocus
                        readOnly={this.props.disabled}
                        onChange={this.props.onSearchChange}
                        onKeyDown={this.props.handleKeyboard}
                        ref={this.props.searchInputRef}
                        placeholder={i18n`Search a place`}
                        className="search-input"
                        type="text"
                    />
                </div>
                {this.props.children}
            </div >
        )
    }
}

SearchInput.propTypes = propTypes;

