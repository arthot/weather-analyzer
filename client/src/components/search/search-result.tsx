import classNames from 'classnames'
import i18n from 'es2015-i18n-tag'
import React, { Component } from 'react'

import * as Actions from 'src/search/actions'
import { ErrorSearchItem, HintSearchItem, LocationSearchItem, SearchItem, SearchItemType } from 'src/search/items'

export class SearchResults extends Component<ISearchResultsProps, ISearchResultsState> {
    constructor(props: ISearchResultsProps) {
        super(props);
        this.state = this.calculateState(props);
    }
    componentWillReceiveProps(nextProps: ISearchResultsProps) {
        this.setState(this.calculateState(nextProps));
    }
    calculateState(props: ISearchResultsProps) {
        return {
            items: props.items,
            animationKey: props.items.reduce<number>((p, c) => p + c.key, 0)
        };
    }
    render(): React.ReactElement<ISearchResultsProps> {
        return (
            <div className={classNames({
                'search-results': true,
                'search-results-hidden': this.props.hidden
            })} key={this.state.animationKey}>
                {this.state.items.map((item, index) =>
                    item.type === SearchItemType.Hint ?
                        <HintResult key={item.key}
                            item={item} onSelect={null}
                            selected={index === this.props.selected} /> :
                        item.type === SearchItemType.Location ?
                            <LocationResult key={item.key}
                                item={item} onSelect={this.props.onSelect}
                                selected={index === this.props.selected} /> :
                            item.type === SearchItemType.Error ?
                                <ErrorResult key={item.key} item={item}
                                    onSelect={this.props.onSelect}
                                    selected={index === this.props.selected} /> :
                                <pre key={item.key}>{item.key}</pre>
                )}
            </div>
        );
    }
}

class HintResult extends React.Component<ISearchResultProps, {}> {
    item: HintSearchItem;
    constructor(props: ISearchResultProps) {
        super(props);
        this.item = props.item as HintSearchItem;
    }
    render(): React.ReactElement<ISearchResultProps> {
        return (
            <div className="result result-hint">
                {i18n([this.item.text] as any)}
            </div>
        );
    }
}

export class LocationResult extends React.Component<ISearchResultProps, {}> {
    item: LocationSearchItem;
    constructor(props: ISearchResultProps) {
        super(props);
        this.item = props.item as LocationSearchItem;
    }
    handleSelect(event: React.MouseEvent<HTMLElement>) {
        let node = event.currentTarget as HTMLElement;
        if (!node.classList.contains('panel'))
            while (node.parentElement && !node.classList.contains('panel')) node = node.parentElement;

        this.props.onSelect(this.item, node.getBoundingClientRect());
    }
    render(): React.ReactElement<ISearchResultProps> {
        return (
            <div onClick={(ev) => this.handleSelect(ev)}
                className={classNames({
                    'result': true,
                    'result-location': true,
                    'result-location--selected': this.props.selected
                })} >
                <div className="result-flag">
                    <i className={classNames({
                        'famfamfam-flags': true,
                        [this.item.location.country.code.toLowerCase()]: true
                    })}></i>
                </div>
                <div className="result-data">
                    <span className="result-title">{this.item.location.name}</span>
                    <div className="result-description">
                        {[
                            this.item.location.subDistrict,
                            this.item.location.district,
                            this.item.location.country ? this.item.location.country.name : null
                        ].filter(i => !!i && i !== this.item.location.name).join(', ')}
                    </div>
                </div>
            </div>
        )
    }
}

class ErrorResult extends React.Component<ISearchResultProps, {}> {
    item: ErrorSearchItem;
    constructor(props: ISearchResultProps) {
        super(props);
        this.item = props.item as ErrorSearchItem;
    }
    render(): React.ReactElement<ISearchResultProps> {
        return (
            <div className="result result-error">
                {this.item.text}
            </div>
        );
    }
}

interface ISearchResultsProps {
    items: SearchItem[];
    hidden: boolean;
    selected: number;
    onSelect(item: SearchItem, coords?: ClientRect);
}

interface ISearchResultsState {
    items: SearchItem[];
    animationKey: number;
}

interface ISearchResultProps {
    item: SearchItem;
    selected: boolean;
    onSelect(item: SearchItem, coords?: ClientRect);
}
