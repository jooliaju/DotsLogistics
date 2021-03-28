import React, { Component } from 'react';
import './home_image.css';
import Trucks from '../../../pictures/img1.jpg';


export default class HomeImage extends Component {

    render() {
        return (
            <React.Fragment>
                <div className = "container">
                <div className ="caption">The Future of Supply Chain</div>
                <img src={Trucks} className= "trucks" alt="trucks"/>

                </div>
              
                
            </React.Fragment>
        )
    }
}
