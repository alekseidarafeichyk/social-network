import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/images/logo.png'
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from './HeaderContainer';
import {Button} from '../common/Button/Button';

function Header(props: HeaderContainerPropsType) {

    const onClickLogout = () => {
        props.logoutTC()
    }

    return (
        <header className={style.header}>
            <img
                src={logo}
                alt="logo"/>
            <div className={style.loginBlock}>
                {props.auth.isAuth ?
                    <div>{props.auth.login} - <Button onClick={onClickLogout} name={'logout'}/></div> :
                    <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;