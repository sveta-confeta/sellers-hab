import React, {useState} from 'react';
import s from "./BurgerMenu.module.css";
import {Button} from "../../../common/Button/Button";

export const BurgerMenu = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const clickHandler = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <>
            <div className={s.burgerMenu} onClick={clickHandler}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className={s.backgroundMenu} width="40" height="40" rx="8" fill="#F6F6FA"/>
                    <path d="M18 15H12" stroke="#232727" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M28 21H12" stroke="#232727" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M22 27H12" stroke="#232727" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </div>

            <nav className={openMenu ? `${s.navbarMenu} ${s.menuActive}` : s.navbarMenu}>
                <ul className={s.navbarList}>
                    <li className={s.navbarItem}>
                        <a href="#">Каталог</a>

                    </li>
                    <li className={s.navbarItem}>
                        <a href="#">Вопросы и Ответы</a>

                    </li>
                    <li className={s.navbarItem}>
                        <a href="#">Блог</a>

                    </li>
                    <li className={s.navbarItem}>
                        <Button variant={"WHITE"} name={'Регистрация'} padding={"10px 15px"} size={"small"}/>
                    </li>
                    <li className={s.navbarItem}>
                        <Button variant={"BLUE"} name={'Войти'} padding={"10px 40px"} size={"small"}/>

                    </li>
                </ul>
            </nav>

        </>
    );

};

