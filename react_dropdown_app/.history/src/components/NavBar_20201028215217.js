import React, {state} from 'react';
import Button from './Button';
import './NavBar.css';
import {Link} from 'reactio-router';

function NavBar()=>{
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