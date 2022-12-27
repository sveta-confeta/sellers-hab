import React from 'react';
import s  from './Result.module.css'

const OurResultPage = () => {
    return (
        <div className={s.resultWrapper}>
            <h3 className={s.title}>Повышай продажи на Wildberries и Озон</h3>
            <p className={s.text}>Мощный опыт сообщества селлеров поможет вам в этом</p>
            <ul className={s.result}>
                <li><span>29560</span>Участников</li>
                <li><span>18</span>Тем форума</li>
                <li><span>24</span>Каталог специалистов</li>
                <li><span>1</span>Эксклюзивный курс</li>
            </ul>

        </div>
    );
};

export default OurResultPage;