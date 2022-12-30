import React, {useEffect, useState} from 'react';
import s from './OfferAsaid.module.css'
import MainImg from './../../assets/OfferImg/MainImg.jpg'
import {Button} from "../../common/Button/Button";
import BottomImg from './../../assets/OfferImg/BottomImg.jpg'
import TopImg from './../../assets/OfferImg/TopImg.jpg';
import BackImg from './../../assets/OfferImg/Setka.png'


export const OfferAsaid = () => {
    const [media, setMedia] = useState<boolean>(false)

    useEffect(() => {
        if (window.innerWidth < 828) {
            setMedia(true)
        }
    }, [window.innerWidth]);
    return (
        <div className={s.offerWrapper}>

            <div className={s.imgWrapper}>
                <img src={MainImg} className={s.mainImg} alt="Девушка которая что то читает в ноутбуке"/>
                <img src={BottomImg} className={s.bottomImg} alt="пример отзыва"/>
                <img src={TopImg} className={s.topImg} alt="пример рейтинга"/>
                <img src={BackImg} className={s.backImg} alt="декоративная сетка"/>

            </div>

            <ul className={s.offerContent}>
                <li><h4>У тебя будет поток клиентов</h4>
                    <p>Нашими каталогами ежемесячно пользуются 20000+ продавцов. Вашей услуги еще нет в нашем каталоге?
                        Если вы - специалист в любой из 26 категорий, то срочно создайте свой профиль.</p>
                </li>
                <li><h4>Повышайте рейтинг и карму</h4>
                    <p>У каждой услуги, сервиса и специалиста в каталогах есть рейтинг, созданный клиентами. Чтобы быть
                        выше в каталоге — нужно иметь лучший рейтинг.</p>
                </li>
                <li>{media ? <Button variant={"BLUE"} padding={"17px 80px"} name={"Разместить услугу"} size={"medium"}/>
                :  <Button variant={"BLUE"} padding={"17px 56px"} name={"Разместить услугу"} size={"medium"}/>}</li>
            </ul>


        </div>
    );
};

