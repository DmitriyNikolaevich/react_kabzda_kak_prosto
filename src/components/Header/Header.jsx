import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://c7.hotpng.com/preview/602/440/925/javascript-clip-art-openclipart-logo-number-js.jpg' alt="Alt text" />

            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;