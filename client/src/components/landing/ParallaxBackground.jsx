import React, { PureComponent } from 'react'
import ParallaxJs from 'parallax-js'

export default class ParallaxBackground extends PureComponent {

    paralaxInstance = null
    wrapEl = React.createRef()

    componentDidMount() {
        this.paralaxInstance = new ParallaxJs(this.wrapEl.current, this.props.options);

        if (/firefox/i.test(navigator.userAgent))
            this.paralaxInstance.disable();
    }

    componentWillUnmount() {
        if (this.paralaxInstance)
            this.paralaxInstance.destroy();
    }

    render() {
        return (
            <div ref={this.wrapEl} className="paralax-background">
                <div data-depth="0.05" className="paralax-layer paralax-layer-4"></div>
                <div data-depth="0.15" className="paralax-layer paralax-layer-3"></div>
                <div data-depth="0.3" className="paralax-layer paralax-layer-2"></div>
                <div data-depth="0.5" className="paralax-layer paralax-layer-1"></div>
            </div>
        )
    }
}
