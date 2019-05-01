import React, { PureComponent } from 'react'
import i18n from 'es2015-i18n-tag'

const MONTHS = [...Array(12).keys()].map(m => m + 1);

export default class MonthSelectorComponent extends PureComponent {

    componentDidMount() {
        this.handleHashChange();
        window.addEventListener('hashchange', this.handleHashChange, false);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.handleHashChange, false);
    }

    handleHashChange = () => {
        const month = document.location.hash.substr(1, 2);
        if (month)
            this.props.onSelect(parseInt(month));
    }

    handleSelect = (ev) => {
        this.props.onSelect(parseInt(ev.target.value));
    }

    render() {
        return (
            <MonthSelector
                visible={this.props.visible}
                handleSelect={this.handleSelect}
                month={this.props.month}
            />
        )
    }
}

const MonthSelector = (props) => {
    return (
        <div className="month-selector" style={{ visibility: props.visible ? 'visible' : 'visible' }} >
            <select
                title={i18n`Select a month`}
                onChange={props.handleSelect}
                value={props.month}
            >
                {MONTHS.map(m => (
                    <option key={m} value={m}>
                        {i18n.translate(`month_${m}`)}
                    </option>
                ))}
            </select>
        </div >
    )
}
