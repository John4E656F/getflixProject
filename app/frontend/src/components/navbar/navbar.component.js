import React, { Component } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">    
                <Link to="/" className="navbar-brand">Movie Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Movie</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Movie Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
}

export default Navbar;