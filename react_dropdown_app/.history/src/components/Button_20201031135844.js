import '.Button.css';
import {Link} from 'react-router-dom';


export function Button(){
    return (
        <Link to='sign-up' >
            <button className='bta'>Sign Up</button>
        </Link>
    )
}