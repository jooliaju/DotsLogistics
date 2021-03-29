import React, { Component } from 'react';
import './Features.css'

import Image1 from '../../../pictures/circle_1.png';
import Image2 from '../../../pictures/circle_2.png';
import Image3 from '../../../pictures/circle_3.png';



export default class Features extends Component {
    state = {
        quote1 : "Using AI to connect optimal partners, increasing collaboration between industry players and improving visibility in business processes",
        quote2 : "Leveraging aggregated data and data from Marketplace, the platform will offer real-time market insights and company analytics",
        quote3 : "Improved experiences in attracting new customers through our free marketplace and low cost analytics and consulting services"
    }

    render() {
        return (
            <React.Fragment>

                <div className = "row">
                    <div className="block">
                        <img src={Image1} className= "image1" alt="image1"/>
                        <h1>Redefined Collaboration</h1>
                        <p>{this.state.quote1}</p>
                    </div>

                    <div className="block">
                        <img src={Image2} className= "image2" alt="image2"/>
                        <h1>Premium Analytics</h1>
                        <p>{this.state.quote2}</p>

                    </div>

                    <div className="block">
                        <img src={Image3} className= "image3" alt="image3"/>
                        <h1>Low Cost</h1>
                        <p>{this.state.quote3}</p>

                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
