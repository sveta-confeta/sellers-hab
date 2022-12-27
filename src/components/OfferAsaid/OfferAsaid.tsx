import React from 'react';
import s from './OfferAsaid.module.css'
import OfferImg from './../../assets/OfferImg.png'
import {Button} from "../../common/Button/Button";

export const OfferAsaid = () => {
    return (
        <div className={s.offerWrapper}>
            <img src={OfferImg}/>
            <ul className={s.offerContent}>
                <li><h4>У тебя будет поток клиентов</h4>
                <p>Нашими каталогами ежемесячно пользуются 20000+ продавцов. Вашей услуги еще нет в нашем каталоге? Если вы - специалист в любой из 26 категорий, то срочно создайте свой профиль.</p>
                </li>
                <li><h4>Повышайте рейтинг и карму</h4>
                    <p>У каждой услуги, сервиса и специалиста в каталогах есть рейтинг, созданный клиентами. Чтобы быть выше в каталоге — нужно иметь лучший рейтинг.</p>
                </li>
                <li><Button variant={"BLUE"} padding={"17px 60px"} name={"Разместить услугу"}/> </li>
            </ul>


        </div>
    );
};

