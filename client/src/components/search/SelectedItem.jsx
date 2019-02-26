import React, { PureComponent } from 'react'
import classNames from 'classnames'

import CancelIcon from '-!svg-react-loader?name=SearchIcon!../../images/cross.svg';

export default class SelectedItem extends PureComponent {
    render() {
        if (!this.props.selected) return null;

        const flagClass = classNames({
            'famfamfam-flags': true,
            [this.props.selected.country.code.toLowerCase()]: true
        });
        const position = {
            top: this.props.position
        };
        return (
            <div className="selected-item" style={position} >
                <div className="result-flag">
                    <i className={flagClass}></i>
                </div>
                <div className="result-data">
                    <span className="result-title">{this.props.selected.name}</span>
                    <div className="result-description">
                        {[
                            this.props.selected.subDistrict,
                            this.props.selected.district,
                            this.props.selected.country ? this.props.selected.country.name : null
                        ].filter(i => !!i && i !== this.props.selected.name).join(', ')}
                    </div>
                </div>
                <CancelIcon className="close" onClick={this.props.onClear} />
            </div>
        );
    }
}
