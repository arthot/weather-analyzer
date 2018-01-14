import classNames from 'classnames'
import React, { PureComponent } from 'react'
import { City } from 'src/common/city'
import * as Actions from 'src/search/actions'

export class SelectedItem extends PureComponent<ISelectedItemProps, {}> {
    render(): React.ReactElement<ISelectedItemProps> {
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
                <button className="close" onClick={this.props.onClear}><i className="fa fa-remove"></i></button>
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
            </div>
        );
    }
}

interface ISelectedItemProps {
    selected: City;
    position: number;
    onClear();
}
