import React, { PureComponent } from 'react'
import ParallaxJs from 'parallax-js'

import LayerImg1 from '../../images/landscape1.svg';
import LayerImg2 from '../../images/landscape2.svg';
import LayerImg3 from '../../images/landscape3.svg';
import LayerImg4 from '../../images/landscape4.svg';

export default class ParallaxBackground extends PureComponent {

    paralaxInstance = null
    wrapEl = React.createRef()

    componentDidMount() {
        this.paralaxInstance = new ParallaxJs(this.wrapEl.current, {});

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
                <div data-depth="0.05" className="paralax-layer"><img src={LayerImg4} /></div>
                <div data-depth="0.15" className="paralax-layer"><img src={LayerImg3} /></div>
                <div data-depth="0.3" className="paralax-layer"><img src={LayerImg2} /></div>
                <div data-depth="0.5" className="paralax-layer"><img src={LayerImg1} /></div>
            </div>
        )
    }
}
