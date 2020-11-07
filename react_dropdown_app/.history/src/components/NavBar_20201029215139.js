import React, {state} from 'react';
//import Button from './Button';
import './NavBar.css';
import {Link} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons' 

function NavBar() {
    const [click, setClick] =  useState(false);
    const handleClick =()=> setClick( !click);
    return (
        <>
            <nav className='navBar'>
                <Link to='/' className='navbar-logo'>
                 EPIC
                </Link>
                <div className='menu-icon' onClick = {handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bar'} />
                </div>
            </nav>
        </>
    );
}

export default NavBar;