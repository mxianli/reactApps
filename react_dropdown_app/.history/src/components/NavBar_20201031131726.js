import React, {useState} from 'react';
//import Button from './Button';
import './NavBar.css';
import {Link} from "react-router-dom"
 

function NavBar() {
    const [click, setClick] =  useState(false);
    
    const handleClick = ()=> {
        console.log('click', click);
        setClick( !click);
    };
    const closeMobileMenu = () => {
        setClick(!click);
    }
    return (
        <>
            <nav className='navBar'>
                <Link to='/' className='navbar-logo'>
                 EPIC
                </Link>
                <div className='menu-icon' onClick = {handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas'
                        </Link>

                    </li>
                </ul>
               
            </nav>
        </>
    );
}

export default NavBar;