import React, { Component } from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <a className="navbar-brand" href="javascript:void(0)">{this.props.brand}</a>
            </nav>
        );
    }
}

export default NavBar;