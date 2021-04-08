import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header">
            <Link to='/'><h2>Banks Search App</h2></Link>
            <Link to='/banks/favourites'><button>My Favourites</button></Link>
        </div>
    );
}

export default Header;