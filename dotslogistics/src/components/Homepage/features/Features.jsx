import React, { Component } from 'react';
import './Features.css'

import Image1 from '../../../pictures/circle_1.png';
import Image2 from '../../../pictures/circle_2.png';
import Image3 from '../../../pictures/circle_3.png';



export default class Features extends Component {
    state = {
        dummyText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }

    render() {
        return (
            <React.Fragment>

                <div className = "row">
                    <div className="block">
                        <img src={Image1} className= "image1" alt="image1"/>
                        <p>{this.state.dummyText}</p>
                    </div>

                    <div className="block">
                        <img src={Image2} className= "image2" alt="image2"/>
                        <p>{this.state.dummyText}</p>

                    </div>

                    <div className="block">
                        <img src={Image3} className= "image3" alt="image3"/>
                        <p>{this.state.dummyText}</p>

                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
