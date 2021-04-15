import React, { Component } from "react";
import "./home_image.css";
import Trucks from "../../../pictures/img1.jpg";

export default class HomeImage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="caption">Logistics Made Simple</div>
          <img src={Trucks} className="trucks" alt="trucks" />
        </div>
      </React.Fragment>
    );
  }
}
