import React, {useState} from 'react';
import './Dropdown.css';
import {Link} from "react-router-dom"
import {MenuItems} from './MenuItems'
 

const Dropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
   return 
   <>
    <ul onClick={handleClick} className=
    {click ?}
   </>
}
 
export default Dropdown;