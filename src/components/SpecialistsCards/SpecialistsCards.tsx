import React from 'react';
import s from "../SpecialistsCards/SpecialistsCards.module.css";
import {SpecialistsCard} from "./SpecialistsCard/SpecialistsCard";
import categoryPoster from './../../assets/video/posters/SpecialistPoster.jpg'
import buttonsPoster from './../../assets/video/posters/ButtonsPosters.jpg'
import carouselPoster from './../../assets/video/posters/CarouselPoster.jpg'

export const SpecialistsCards = () => {
    return (

        <div className={s.specialistsCardsWrapper}>
            <h3 className={s.title}>Как работают каталоги?</h3>
            <div className={s.specialistsCards}>
                <SpecialistsCard poster={categoryPoster} src={require('./../../assets/video/Categories3.mp4')}
                                 title={'Выберите категорию специалиста'}
                                 text={'Здесь собраны все специалисты, сервисы и услуги - и из Телеграм чатов, и из бирж труда, и из Инстграм. Вам не нужно искать и спрашивать - все уже собрано.'}/>
                <SpecialistsCard poster={buttonsPoster} src={require('./../../assets/video/Video1.mp4')}
                                 title={'Отбирайте по фильтрам/тегам'}
                                 text={'Мы оценили каждого специалиста в каталогах по самым важным параметрам. Пользуйтесь фильтрами и тегами, чтобы отобрать подходящих именно вам.'}/>
                <SpecialistsCard poster={carouselPoster} src={require('./../../assets/video/Cards2.mp4')}
                                 title={'Находите вашего специалиста'}
                                 text={'Найдите нужного специалиста или сервис — с портфолио, прямым контактом, и оценками работ по самым важным параметрам.'}/>
            </div>
        </div>

)

};
