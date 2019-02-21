import React, { PureComponent } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import i18n from 'es2015-i18n-tag'
import PropTypes from 'prop-types'

import { localize } from '../../locale/localize'
import { supportedLocales } from '../../locale/constants'
import { LOCALE_CHANGED } from '../../locale/actions'

const propTypes = {
    locale: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    onLocaleChange: locale => dispatch({
        type: LOCALE_CHANGED,
        payload: { locale }
    }),
})

class LocaleSelector extends PureComponent {

    mapFlag = (locale) => locale.length === 2 ? locale : locale.split('-')[1].toLowerCase()

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

LocaleSelector.propTypes = propTypes;

export default localize(connect(null, mapDispatchToProps)(LocaleSelector));
