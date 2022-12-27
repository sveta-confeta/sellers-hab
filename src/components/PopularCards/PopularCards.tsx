import React from 'react';
import s from './PopularCards.module.css'
import {PopularCard} from "./PopularCard/PopularCard";
import InfoImg from "./../../assets/popularCards/infografic.jpg"
import StatisticImg from "./../../assets/popularCards/static.jpg"
import ThinksImg from "./../../assets/popularCards/thinks.jpg"


export const PopularCards = () => {
    return (
        <div className={s.PopularCardsWrapper}>
            <div className={s.titleElements}>
                <h3 className={s.title}>Популярное в каталоге Sellershub</h3>
                <a className={s.link} href={'#'}>Все категории</a>
            </div>
            <div className={s.catalogsCards}>
                <PopularCard title={'Дизайнер'}
                             info={'Инфографика для Wildberries. Самые продающие картинки для вашего товара за 1-2 дня.'}
                             src={InfoImg}
                             alt={'Дизайн карточек Wildberries и Ozon'} name={'Перейти в каталог'} price={960}/>
                <PopularCard title={'Менеджер'}
                             info={'Менеджер ЛК Вайлдберриз. Опытный и всезнающий менеджер возьмет клиентлов на удаленную работу 2-3 часа в день'}
                             src={StatisticImg}
                             alt={'Статистика заказов'} name={'Перейти в каталог'} price={1500}/>
                <PopularCard title={'Оптовик'}
                             info={'Мелкий и крупный опт косметики из Кореи. Просто закажите, а через неделю все товары будут у вас в руках.'}
                             src={ThinksImg}
                             alt={'Карзина товаров из Кореи'} name={'Перейти в каталог'} price={10000}/>

            </div>
        </div>
    );
};

