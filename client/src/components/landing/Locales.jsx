import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import i18n from 'es2015-i18n-tag'

import { localize } from '../../locale/localize'
import { supportedLocales } from '../../locale/constants'
import { LOCALE_CHANGED } from '../../locale/actions'

@connect(null, (dispatch) => ({
    onLocaleChange: locale => dispatch({ type: LOCALE_CHANGED, payload: { locale } }),
}))
@localize
export default class LocaleSelector extends PureComponent {

    mapFlag = (locale) => locale.length == 2 ? locale : locale.split('-')[1].toLowerCase()

    onClick = (locale) => (ev) => {
        ev.preventDefault();
        this.props.onLocaleChange(locale);
    }

    render() {
        return (
            <div className="locale-selector">
                {supportedLocales.map(locale => (
                    <div
                        key={locale} role="button" title={i18n.translate(locale)}
                        className={classNames('locale-selector-item', {
                            'locale-selector-item__selected': this.props.locale === locale
                        })}
                        onClick={this.onClick(locale)}
                    >
                        <div className={classNames('famfamfam-flags', {
                            [this.mapFlag(locale)]: true,
                        })} />
                    </div>
                ))}
            </div>
        )
    }
}
