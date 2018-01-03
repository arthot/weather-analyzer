import React, { PureComponent } from 'react'
import { Parallax } from 'src/components/global/Paralax'

export class Landing extends PureComponent {
    render() {
        return (
            <div>
                <Parallax>
                    <div data-depth="0.2">My first Layer2!</div>
                    <div data-depth="0.6">My second Layer!</div>
                </Parallax>
            </div>
        )
    }
}
