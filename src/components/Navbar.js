import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar() {
       const items = useSelector((state) => (state.cart));
    return (
        <div className='navbar'>
            <span className='logo'>Redux store</span>
            <div className='navlink'>
                <Link to={"/"}>Home</Link>
                <Link to={"/cart"}>Cart</Link>
            </div>

            <span className='cartCount'>
                Cart Item: {items.length}
            </span>
        </div>
    );
}

export default Navbar;
