import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../css/header.css'
import logo from '../static/logo.png'

class Header extends Component {
    render() {
        return (
            <div className='spice-header'>
                <div className='spice-navbar-logo'>
                    <Link to='/'><img src={logo} className="App-logo" alt="logo"/></Link>
                </div>
            </div>
        );
    }
}

export default Header;
