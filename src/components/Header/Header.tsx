import React from 'react';
import s from './Header.module.css'
import Logo from './../../assets/logo.png'
import {Navigation} from "./Navigation/Navigation";
import {Button} from "../../common/Button/Button";

export const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.header}>

                <img src={Logo} alt={'Logo'} className={s.logo}/>
                <Navigation/>
                <div className={s.btnGroup}>
                    <Button name={'Регистрация'} variant={'WHITE'}  padding={'14px 30px'} />
                    <Button name={'Войти'} variant={'BLUE'} padding={'14px 30px'} />
                </div>
            </div>
        </div>
    );
};

