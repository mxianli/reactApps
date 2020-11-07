import React, {useState} from 'react';
import './Dropdown.css';
import {Link} from "react-router-dom";
import {MenuItems} from './MenuItems';
   
export default function Dropdown(){
    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
    }
   return (
   <>
    <ul onClick={handleClick} className=
    {click ? 'dropdown-menu.clicked' : 'dropdown-menu'} >
        { MenuItems.map ((item, index) =>{
            return (
                <li key={index} >
                    <Link to={item.path} className={item.cName } 
                     onClick = { () => {setClick (false)}}>
                        {item.path}
                    </Link>
                </li>
            );
        })}
    </ul>
   </>
   );
}
 
 