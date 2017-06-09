import React from 'react';

import logo from './react-redux-logos.jpg';

export default class Header extends React.Component {
    render() {
        return(
            <div className="header">
            <img src={logo} className="logo" alt="logo" />
            <h2>Welcome to Simple React-Redux</h2>
            </div>
        )
    }
}