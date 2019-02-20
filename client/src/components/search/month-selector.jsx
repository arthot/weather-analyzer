import i18n from 'es2015-i18n-tag'
import React, { PureComponent } from 'react'
import { localize } from '../../locale/localize'

const MONTHS = [...Array(12).keys()].map(m => m + 1);

@localize
export class MonthSelector extends PureComponent {
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
    render() {
        return (
            <div className="month-selector">
                <select title={i18n``}
                    onChange={this.handleSelect.bind(this)} value={this.props.month}>
                    {MONTHS.map(m => (
                        <option key={m} value={m}>{i18n.translate(`month_${m}`)}</option>
                    ))}
                </select>
            </div >
        );
    }
}
