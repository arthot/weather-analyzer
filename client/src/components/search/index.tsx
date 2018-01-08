import classNames from 'classnames'
import i18n from 'es2015-i18n-tag'
import React, { Component } from 'react'

class SearchComponent extends Component<ISearchProps, ISearchState> {
    selectedPosition: number = 8;
    searchInput: HTMLInputElement | null;

    constructor(props) {
        super(props);
        this.state = { selectedItem: -1, chosen: !!this.props.selected };
    }

    componentWillReceiveProps(next: ISearchProps) {
        this.setState({
            chosen: this.state.chosen || !!next.selected,
            selectedItem: next.input !== this.props.input ? -1 : this.state.selectedItem,
        });
    }
    onChange(ev) {
        this.props.onChange(this.props.params.lang, ev.target.value);
    }
    onSelect = (item: SearchItem, coords?: ClientRect) => {
        if (item.type === SearchItemType.Location) {
            let city = (item as LocationSearchItem).location;
            this.props.onSelect(city, this.props.params.lang);
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
            this.onSelect(this.props.items[this.state.selectedItem]);
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
                    selected={this.props.selected}
                    params={this.props.params} />
                <div className="search-box">
                    <input value={this.props.input}
                        onChange={this.onChange.bind(this)}
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
                        onSelect={this.onSelect}
                        items={this.props.items}
                        hidden={!!this.props.selected}
                        selected={this.state.selectedItem}
                        lang={this.props.params.lang} />
                </div>
            </div>
        )
    }
}

interface ISearchState {
    selectedItem: number;
    chosen: boolean;
}

interface ISearchProps extends ISearchStore, ILocalizationProps {
    onChange(lang: string, text: string);
    onSelect(item: City, lang: string);
    onClear();
    onMonthSelect(month: number);
}
