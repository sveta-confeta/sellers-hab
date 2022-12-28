import React from 'react';
import s from './OfferPoster.module.css'
import {Button} from "../../common/Button/Button";

export const OfferPoster = () => {
    return (
        <div className={s.posterWrapper}>
            <div className={s.contentPoster}>
                <h4 className={s.title}>Есть что предложить селлерам?</h4>
                <p className={s.text}>Создай свой профиль в каталоге Sellershub</p>
                <Button variant={'WHITE'} padding={'17px 36px'} name={'Присоединиться'} size={"medium"}/>
            </div>
        </div>
    );
};

