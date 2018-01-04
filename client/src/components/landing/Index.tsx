import React, { PureComponent } from 'react'
import { Parallax } from 'src/components/global/Paralax'

import 'src/styles/landing.less'

export class Landing extends PureComponent {
    render() {
        return (
            <div className="landing-wrap clearfix">
                <div className="landing">
                    <Parallax>
                        <div data-depth="0.05" className="paralax-layer paralax-layer-4"></div>
                        <div data-depth="0.15" className="paralax-layer paralax-layer-3"></div>
                        <div data-depth="0.3" className="paralax-layer paralax-layer-2"></div>
                        <div data-depth="0.5" className="paralax-layer paralax-layer-1"></div>
                    </Parallax>
                </div>
            </div>
        )
    }
}
