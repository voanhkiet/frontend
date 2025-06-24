import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const itemCount = useSelector((state) => state.cart.items.length);

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: "1rem 2rem",
            backgroundColor: "#f0f0f0",
            borderBottom: "1px solid #ccc"
        }}>
            <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                🖼️ Painting Store
            </Link>
            <Link to="/cart" style={{
                textDecoration: 'none',}}>
                🛒 Cart ({itemCount})
            </Link>
        </header>
    );
};

export default Header;