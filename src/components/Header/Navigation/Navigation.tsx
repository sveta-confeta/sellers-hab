import React from 'react';
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <ul className={s.nav}>
            <li className={s.nav_elem}><a href={"#"}>Каталог</a></li>
            <li className={s.nav_elem}><a href={"#"}>Вопросы и ответы</a></li>
            <li className={s.nav_elem}><a href={"#"}>Блог</a></li>

        </ul>
    );
};

