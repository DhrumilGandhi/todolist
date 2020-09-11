import React from 'react';
import logo from './images/Untitled.jpg';
import './index.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt ="logo"/>
                <h1>Clone of Google Keep</h1>
            </div>
        </>
    )
}

export default Header;