import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    children: PropTypes.func.isRequired,
}

export default class ScrollTracker extends Component {
    state = { visible: false }
    wrapEl = React.createRef();

    componentDidMount() {
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
            rootMargin: '-30px',
            threshold: this.props.threshold,
        });
        this.observer.observe(this.wrapEl.current);
    }

    componentWillUnmount() {
        this.observer.disconnect();
    }

    handleIntersection(ev) {
        const [[, entry]] = ev.entries();
        this.setState({
            visible: entry.isIntersecting
        });
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
