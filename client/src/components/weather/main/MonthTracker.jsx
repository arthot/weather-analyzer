import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import maxBy from 'lodash/maxBy'

const propTypes = {
    onMonthChanged: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
}

export default class MonthTracker extends Component {
    distribution = new Map();
    monthRefs = {};
    recalculateDebounced = debounce(this.recalculate.bind(this), 100);

    onItersection(month, { intersectionRatio }) {
        this.distribution.set(month, intersectionRatio);
        this.recalculateDebounced();
    }

    recalculate() {
        const month = maxBy(Array.from(this.distribution), '[1]');
        if (month && month[1])
            this.props.onMonthChanged(month[0]);
    }

    getMonthPosition(month) {
        return this.monthRefs[month].getPosition();
    }

    render() {
        return this.props.children.map(el =>
            React.cloneElement(el, {
                onItersection: this.onItersection.bind(this, el.props.month),
                ref: e => { this.monthRefs[el.props.month] = e }
            })
        )
    }
}

MonthTracker.propTypes = propTypes;
