import React, {useState} from 'react';
import {Button} from './Button';
import './NavBar.css';
import {Link} from "react-router-dom"
import Dropdown from "./Dropdown";

function NavBar() {
    const [click, setClick] =  useState(false);
    const [dropDown, setDropDown] =  useState(false);
    
    const onMouse = ()=>{
        if(window.innerWidth <960){
            set
        }
    }
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
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropDown && <Dropdown />}

                    </li>
                   
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>

                </ul>
                <Button />
            </nav>
        </>
    );
}

export default NavBar;