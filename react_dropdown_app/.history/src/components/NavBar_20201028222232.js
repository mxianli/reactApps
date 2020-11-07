import React, {state} from 'react';
//import Button from './Button';
import './NavBar.css';
import {Link} from "react-router-dom"

function NavBar() {
    const [click, setClich]
    return (
        <>
            <nav className='navBar'>
                <Link to='/' className='navbar-logo'>
                 EPIC
                </Link>
            </nav>
        </>
    );
}

export default NavBar;