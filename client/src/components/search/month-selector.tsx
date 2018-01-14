import i18n from 'es2015-i18n-tag'
import React, { PureComponent } from 'react'
import { City } from 'src/common/city'
import { Month, Months } from 'src/common/month'

export class MonthSelector extends PureComponent<IMonthSelectorProps> {
    componentDidMount() {
        this.handleHashChange();
        window.addEventListener('hashchange', this.handleHashChange.bind(this), false);
    }
    componentWillUnmount() {
        window.removeEventListener('hashchange', this.handleHashChange.bind(this), false);
    }
    handleHashChange() {
        const month = document.location.hash.substr(1, 2);
        if (month)
            this.props.onSelect(parseInt(month));
    }
    handleSelect(ev) {
        this.props.onSelect(parseInt(ev.target.value));
    }
    render(): React.ReactElement<IMonthSelectorProps> {
        return (
            <div className="month-selector">
                <select title={i18n``}
                    onChange={this.handleSelect.bind(this)} value={this.props.month}>
                    {Months.map(m => (<option key={m.value} value={m.value}>{m.title}</option>))}
                </select>
            </div >
        );
    }
}

interface IMonthSelectorProps {
    month: number;
    selected: City;
    onSelect(month: number);
}
