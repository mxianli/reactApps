import './Button.css';
import {Link} from 'react-router-dom';


export function Button(){
    return (
        <Link to='signUp' >
            <button className='btn'>Sign Up</button>
        </Link>
    )
}