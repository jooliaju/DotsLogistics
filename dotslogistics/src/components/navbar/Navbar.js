import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import Dotslog from '../../pictures/dotslog.png'


//use class since we are using states
class Navbar extends Component {

    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked}) //everytime  you click, it sets clicked state to opposite
    }



    render() {
        return(
            <nav className= "NavbarItems">
                <img src = {Dotslog} style = {{width: '60px', paddingRight: '10px'}}></img>
                    <h1 className = "navbar-logo"> DotsLogistics <i className = "fab fa-react" ></i></h1>
                    <div className = "menu-icon" onClick = {this.handleClick}>
                        <i className = {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuItems && MenuItems.map((item, index) => { //pass in item and index
                            return (
                                <li key = {index}>
                                    <a className= {item.cName} href = {item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
            </nav>
        )
    }
}

export default Navbar