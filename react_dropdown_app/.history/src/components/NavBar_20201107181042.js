import React, {useState} from 'react';
import {Button} from './Button';
import './NavBar.c';
import {Link} from "react-router-dom"
import Dropdown from "./Dropdown";
 
function NavBar() {
    const [click, setClick] =  useState(false);
    const [dropDown, setDropDown] =  useState(false);
    
    const onMouseEnter = ()=>{
        if(window.innerWidth <960){
            setDropDown(false);
        }else{
            setDropDown(true);
        }
    }

    const onMouseLeave = ()=>{
        if(window.innerWidth <960){
            setDropDown(false);
        }else{
            setDropDown(false);
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
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                 EPIC <a className='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick = {handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click? 'nav-menu.active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' 
                        onMouseEnter= {onMouseEnter} onMouseLeave ={onMouseLeave }>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropDown && <Dropdown />}

                    </li>
                   
                    <li className='nav-item'>
                        <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
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