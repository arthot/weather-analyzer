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
            rootMargin: '-60px',
            threshold: [this.props.threshold, 0.5],
        });
        this.observer.observe(this.wrapEl.current);
    }

    componentWillUnmount() {
        this.observer.disconnect();
    }

    handleIntersection(entities) {
        this.setState({
            visible: entities[0].isIntersecting
        });

        if (this.props.onItersection)
            this.props.onItersection(entities[0]);
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
