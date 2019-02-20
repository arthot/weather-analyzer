import React, { PureComponent } from 'react'
const ParallaxJs = require('parallax-js')

export class Parallax extends PureComponent {
    instance = null
    wrap = null

    componentDidMount() {
        this.instance = new ParallaxJs(this.wrap, this.props.options);
    }

    componentWillUnmount() {
        this.instance.destroy();
    }

    render() {
        return (
            <div ref={el => this.wrap = el} style={{
                height: '100%',
                width: '100%',
            }}>
                {this.props.children}
            </div>
        )
    }
}
