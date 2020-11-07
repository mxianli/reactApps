import React, {useState} from 'react';
import './Dropdown.css';
import {Link} from "react-router-dom"
import {MenuItems} from './MenuItems'
import { MenuItems } from '../../.history/src/components/MenuItems_20201031172000';
 

const Dropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
   return 
   <>
    <ul onClick={handleClick} className=
    {click ? 'dropdown-menu clicked' : 'Dropdown-menu'} >
        { MenuItems.map ((item, index) =>{
            return (
                <li key={index} >
                    <Link className={item.cName}
                </li>
            );
        })}
    </ul>
   </>
}
 
export default Dropdown;