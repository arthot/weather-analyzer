import React, { Component } from 'react'
import classNames from 'classnames'


export default class ScrollTracker extends Component {
    container = React.createRef();
    state = {
        dragging: false
    }

    componentDidMount() {
        this.container.current.addEventListener('wheel', this.onWheelHandle);
        window.addEventListener('mouseup', this.mouseUpHandle);
        window.addEventListener('mousemove', this.mouseMoveHandle);
    }

    componentWillUnmount() {
        this.container.current.removeEventListener('wheel', this.onWheelHandle);
        window.removeEventListener('mouseup', this.mouseUpHandle);
        window.removeEventListener('mousemove', this.mouseMoveHandle);
    }

    mouseUpHandle = () => {
        if (this.state.dragging) {
            this.setState({ dragging: false });
        }
    }

    mouseDownHandle = (e) => {
        if (!this.state.dragging) {
            this.setState({ dragging: true });
            this.lastClientX = e.clientX;
            this.lastClientY = e.clientY;
            e.preventDefault();
        }
    }

    mouseMoveHandle = (e) => {
        if (this.state.dragging) {
            document.documentElement.scrollLeft -=
                (-this.lastClientX + (this.lastClientX = e.clientX));
            document.documentElement.scrollTop -=
                (-this.lastClientY + (this.lastClientY = e.clientY));
        }
    }

    onWheelHandle = (e) => {
        if (!e.ctrlKey) {
            e.preventDefault();
            document.documentElement.scrollLeft += e.deltaY;
        }
    }

    render() {
        return (
            <div className={classNames(this.props.className, { 'workspace-wrap__scrollable': this.state.dragging })}
                onMouseDown={this.mouseDownHandle}
                onMouseUp={this.mouseUpHandle}
                onMouseMove={this.mouseMoveHandle}
                ref={this.container}
            >
                {this.props.children}
            </div>
        )
    }
}
