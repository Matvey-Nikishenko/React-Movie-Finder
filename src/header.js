import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => {

    return (
        <nav className='nav'> 
            <NavLink exact to='/' className='nav-link' activeClassName='selected'>Home</NavLink>
            <NavLink  to='/movies' className='nav-link' activeClassName='selected'>Movies</NavLink>
        </nav>    
    )
}

export default Header;