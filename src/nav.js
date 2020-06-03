import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {

    const style = {
        color: "white"
    }

    return (
        <div>
            <h3>Logo</h3>
            <ul>
                <Link style={style} to="/">
                    <li>Home</li>
                </Link>
                <Link style={style} to="/about">
                    <li>about</li>
                </Link>
                <Link style={style} to="/shop">
                    <li>Shop</li>
                </Link>

            </ul>
        </div>
    );
}

export default Nav;
