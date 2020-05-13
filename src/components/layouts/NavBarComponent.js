import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../shared/img/logo.png'

class NavBarComponent extends Component {

    render(){
        const { title } = this.props;
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">
                    <img src={ logo } alt="..." className="img-nav" /> { title }
                </NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active"  to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/search">Search</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBarComponent