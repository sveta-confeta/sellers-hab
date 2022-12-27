import React from 'react';
import s from './CatalogCards.module.css'
import {CatalogCard} from "./CatalogCard/CatalogCard";
import userImg from './../../assets/catalogCards/User Card.png'
import seo from './../../assets/catalogCards/SEO.png'


const CatalogCards = () => {
    return (
        <div className={s.catalogsCardsWrapper}>
            <h3 className={s.title}>Каталоги специалистов для маркетплейсов</h3>
            <div className={s.catalogsCards}>
                <CatalogCard title={'Картотека 399 дизайнеров'} text={'Мы оценили каждого специалиста в каталогах по самым важным параметрам. Пользуйтесь фильтрами и тегами, чтобы отобрать подходящих именно вам.'} img={userImg}/>
                <CatalogCard title={'Топ 81 менеджер Вайлдберриз ЛК'} text={'В этом топе — 380+ самых востребованных менеджеров ЛК для маркетплейсов, которые оптимизируют личный кабинет Озон и Вайлдберриз.'} img={seo}/>
                <CatalogCard title={'Каталог опта для продажи на Вайлдберриз и Озон'} text={'Что и как продавать на Валберис и Озон в 2023? Просто забирай самый актуальный каталог оптовиков и производств и выбирай свой товар'} name={'Cмотреть еще 23 каталога'}/>
            </div>
        </div>
    );
};

export default CatalogCards;