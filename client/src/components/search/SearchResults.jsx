import React, { PureComponent } from 'react'
import classNames from 'classnames'
import i18n from 'es2015-i18n-tag'

import { SearchItemType } from '../../search/items'

export default class SearchResults extends PureComponent {
    findItemNode = (item) => {
        return this.props.items && this.nodes[item.key] && this.nodes[item.key].current;
    }

    renderItem = (item, index) => {
        this.nodes[item.key] = React.createRef();

        switch (item.type) {
            case SearchItemType.Hint:
                return (
                    <HintResult
                        key={item.key}
                        item={item}
                        onSelect={null}
                        locale={this.props.locale}
                        selected={index === this.props.selectedSuggestion}
                    />
                )
            case SearchItemType.Location:
                return (
                    <LocationResult
                        key={item.key}
                        item={item}
                        innerRef={this.nodes[item.key]}
                        onSelect={this.props.onSelect}
                        locale={this.props.locale}
                        selected={index === this.props.selectedSuggestion}
                    />
                )
            case SearchItemType.Error:
                return (
                    <ErrorResult
                        key={item.key}
                        item={item}
                        onSelect={this.props.onSelect}
                        locale={this.props.locale}
                        selected={index === this.props.selectedSuggestion}
                    />
                )
            default:
                return (
                    <pre key={item.key}>{item.key}</pre>
                )
        }
    }

    render() {
        const { items, hidden } = this.props;
        if (items.length) {
            this.nodes = {};
            return (
                <div className={classNames('search-results', {
                    'search-results__hidden': hidden
                })}>
                    {items.map(this.renderItem)}
                </div>
            )
        } else
            return null;
    }
}

class HintResult extends PureComponent {
    state = {
        show: false
    }

    componentDidMount() {
        this.delay = setTimeout(() => this.setState({ show: true }), 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.delay);
    }

    render() {
        if (this.state.show) {
            return (
                <div className="result result-hint">
                    {i18n.translate(this.props.item.key)}
                </div>
            )
        } else {
            return null
        }
    }
}

export class LocationResult extends PureComponent {
    handleSelect = (ev) => {
        let node = ev.currentTarget;
        if (!node.classList.contains('result'))
            while (node.parentElement && !node.classList.contains('result')) node = node.parentElement;

        this.props.onSelect(this.props.item);
    }

    render() {
        const { location } = this.props.item;
        return (
            <div onClick={this.handleSelect}
                className={classNames('result result-location', {
                    'result-location--selected': this.props.selected
                })}
                ref={this.props.innerRef}
            >
                <div className="result-flag">
                    <i className={classNames('famfamfam-flags', {
                        [location.country ? location.country.code.toLowerCase() : '']: true
                    })}></i>
                </div>
                <div className="result-data">
                    <span className="result-title">{location.name}</span>
                    <div className="result-description">
                        {[
                            location.subDistrict,
                            location.district,
                            location.country ? location.country.name : null
                        ].filter(i => !!i && i !== location.name).join(', ')}
                    </div>
                </div>
            </div>
        )
    }
}

class ErrorResult extends PureComponent {
    render() {
        return (
            <div className="result result-error">
                {this.props.item.text}
            </div>
        )
    }
}
