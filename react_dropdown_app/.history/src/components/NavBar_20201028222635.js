import React, {state} from 'react';
//import Button from './Button';
import './NavBar.css';
import {Link} from "react-router-dom"

function NavBar() {
    const [click, setClick] =  useState(false);
    const handleClick =()=> setClick( !click);
    return (
        <>
            <nav className='navBar'>
                <Link to='/' className='navbar-logo'>
                 EPIC
                </Link>
                <div className='menu-icon'>
                <i className
                </div>
            </nav>
        </>
    );
}

export default NavBar;