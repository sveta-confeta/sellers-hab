import React from 'react';
import s from './Header.module.css'
import Logo from './../../assets/logo.png'
import {Navigation} from "./Navigation/Navigation";
import {Button} from "../../common/Button/Button";
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";

export const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.header}>

                <img src={Logo} alt={'Logo'} className={s.logo}/>
                <Navigation/>
                <div className={s.btnGroup}>
                    <Button name={'Регистрация'} variant={'WHITE'}  padding={'14px 30px'} size={"small"} />
                    <Button name={'Войти'} variant={'BLUE'} padding={'14px 30px'} size={"small"} />
                </div>
               <BurgerMenu/>
            </div>
        </div>
    );
};

