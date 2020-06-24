import React from "react";
import x from './Header.module.css';

function Header() {
    return (
        <header className={x.header}>
            <img
                src="http://mythemestore.com/friend-finder/images/logo.png"
                alt="logo"/>
        </header>
    );
}

export default Header;