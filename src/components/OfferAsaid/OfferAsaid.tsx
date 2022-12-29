import React, {useEffect, useState} from 'react';
import s from './OfferAsaid.module.css'
import OfferImg from './../../assets/OfferImg.png'
import OfferImgMob from './../../assets/OfferImgMob.jpg'
import {Button} from "../../common/Button/Button";

export const OfferAsaid = () => {
    // const [openImgMob, setOpenImgMob] = useState<boolean>(false)

    // useEffect(() => {
    //     if (window.innerWidth < 1000) {
    //         setOpenImgMob(true)
    //     }
    // }, [openImgMob]);


    return (

        <div className={s.offerWrapper}>
            <div className={s.wrapper}><img src={OfferImg} className={s.imgWrapper} alt="Девушка что то читает в ноутбуке"/></div>
            {/*<div className={s.imgWrapperMob}>*/}
            {/*    <img className={openImgMob ? s.offerImg : s.offerImgMob}*/}
            {/*         src={openImgMob ? OfferImgMob : OfferImg}*/}
            {/*         alt="Девушка что то читает в ноутбуке"/>*/}
            {/*</div>*/}

            <ul className={s.offerContent}>
                <li><h4>У тебя будет поток клиентов</h4>
                    <p>Нашими каталогами ежемесячно пользуются 20000+ продавцов. Вашей услуги еще нет в нашем каталоге?
                        Если вы - специалист в любой из 26 категорий, то срочно создайте свой профиль.</p>
                </li>
                <li><h4>Повышайте рейтинг и карму</h4>
                    <p>У каждой услуги, сервиса и специалиста в каталогах есть рейтинг, созданный клиентами. Чтобы быть
                        выше в каталоге — нужно иметь лучший рейтинг.</p>
                </li>
                <li><Button variant={"BLUE"} padding={"17px 60px"} name={"Разместить услугу"} size={"medium"}/></li>
            </ul>


        </div>
    );
};

