import React from 'react';
import { NavLink } from 'react-router-dom'
import './Nav.css'
import { Navbar } from 'reactstrap'

function Nav() {
    return (
        <div className="nav">
            <Navbar>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/projects">My Projects</NavLink>
                <NavLink exact to="/contact">Contact</NavLink>
                <NavLink exact to="/contact">LinkedIn</NavLink>
                <NavLink exact to="/contact">Github</NavLink>

            </Navbar>
        </div>
    )

}

export default Nav;