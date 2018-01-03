import React, { PureComponent } from 'react'
const ParallaxJs = require('parallax-js')

export class Parallax extends PureComponent<{ options?: any }> {
    instance: any;
    wrap: HTMLDivElement | null;

    componentDidMount() {
        this.instance = new ParallaxJs(this.wrap, this.props.options);
    }

    componentWillUnmount() {
        this.instance.destroy();
    }

    render() {
        return (
            <div ref={el => this.wrap = el}>
                {this.props.children}
            </div>
        )
    }
}
