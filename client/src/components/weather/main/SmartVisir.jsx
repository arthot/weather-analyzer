import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.func.isRequired,
    onItersection: PropTypes.func,
}

export default class ScrollTracker extends Component {
    state = { visible: false }
    wrapEl = React.createRef();

    componentDidMount() {
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
            root: document.getElementById('workspace'),
            rootMargin: '-60px',
            threshold: [this.props.threshold, 0.5],
        });
        this.observer.observe(this.wrapEl.current);
    }

    componentWillUnmount() {
        this.observer.disconnect();
    }

    handleIntersection(entities) {
        const entity = this.ensureNegativeIntersection(entities[0]);

        this.setState({
            visible: entity.isIntersecting
        });

        if (this.props.onItersection)
            this.props.onItersection(entity);
    }

    ensureNegativeIntersection(entity) {
        if (!entity.rootBounds) {
            const intersectionRatio = Math.abs((document.documentElement.scrollLeft - this.wrapEl.current.offsetLeft) / document.documentElement.offsetWidth);
            if (intersectionRatio < 0.9) {
                /* CHROME BUG? Intersection is wrong in case of rapid programatically scroll movement */
                return {
                    isIntersecting: true,
                    intersectionRatio,
                }
            }
        }
        return entity;
    }

    getPosition() {
        return this.wrapEl.current.offsetLeft;
    }

    render() {
        return (
            <div className={this.props.className} ref={this.wrapEl}>
                {this.props.children(this.state.visible)}
            </div>
        )
    }
}

ScrollTracker.propTypes = propTypes;
