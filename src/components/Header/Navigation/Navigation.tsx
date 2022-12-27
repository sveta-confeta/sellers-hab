import React from 'react';
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <ul className={s.nav}>
            <li>Каталог</li>
            <li>Вопросы и ответы</li>
            <li>Блог</li>

        </ul>
    );
};

