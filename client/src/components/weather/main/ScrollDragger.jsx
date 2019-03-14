import React, { Component } from 'react'
import classNames from 'classnames'


export default class ScrollTracker extends Component {
    container = React.createRef();
    state = {
        dragging: false
    }

    componentDidMount() {
        window.addEventListener('mouseup', this.mouseUpHandle.bind(this));
        window.addEventListener('mousemove', this.mouseMoveHandle.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('mouseup', this.mouseUpHandle.bind(this));
        window.removeEventListener('mousemove', this.mouseMoveHandle.bind(this));
    }

    mouseUpHandle() {
        if (this.state.dragging) {
            this.setState({ dragging: false });
        }
    }

    mouseDownHandle(e) {
        if (!this.state.dragging) {
            this.setState({ dragging: true });
            this.lastClientX = e.clientX;
            this.lastClientY = e.clientY;
            e.preventDefault();
        }
    }

    mouseMoveHandle(e) {
        if (this.state.dragging) {
            document.documentElement.scrollLeft -=
                (-this.lastClientX + (this.lastClientX = e.clientX));
            document.documentElement.scrollTop -=
                (-this.lastClientY + (this.lastClientY = e.clientY));
        }
    }

    onWheelHandle(e) {
        if (!e.ctrlKey) {
            e.preventDefault();
            document.documentElement.scrollLeft += e.deltaY;
        }
    }

    render() {
        return (
            <div className={classNames(this.props.className, { 'workspace-wrap__scrollable': this.state.dragging })}
                onMouseDown={this.mouseDownHandle.bind(this)}
                onMouseUp={this.mouseUpHandle.bind(this)}
                onMouseMove={this.mouseMoveHandle.bind(this)}
                onWheel={this.onWheelHandle.bind(this)}
                ref={this.container}
            >
                {this.props.children}
            </div>
        )
    }
}