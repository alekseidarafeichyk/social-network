import React from "react";
import style from './Header.module.css';
import logo from '../../assets/images/logo.jpg'
import { NavLink } from "react-router-dom";
import classes from '../Navbar/Navbar.module.css';
import {MapStatePropsType} from './HeaderContainer';

function Header(props: MapStatePropsType) {
    return (
        <header className={style.header}>
            <img
                src={logo}
                alt="logo"/>
                <div className={style.loginBlock}>
                    { props.auth.isAuth ? props.auth.login :
                    <NavLink to='/login'>Login</NavLink> }
                </div>
        </header>
    );
}

export default Header;