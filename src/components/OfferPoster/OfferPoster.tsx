import React, {useEffect, useState} from 'react';
import s from './OfferPoster.module.css'
import {Button} from "../../common/Button/Button";

export const OfferPoster = () => {
    const [media, setMedia] = useState<boolean>(false)

    useEffect(() => {
        if (window.innerWidth < 828) {
            setMedia(true)
        }
    }, [window.innerWidth]);
    return (
        <div className={s.posterContainer}>
            <div className={s.posterWrapper}>
                <div className={s.contentPoster}>
                    <h4 className={s.title}>Есть что предложить селлерам?</h4>
                    <p className={s.text}>Создай свой профиль в каталоге Sellershub</p>
                    { media ? <Button variant={'WHITE'} padding={'17px 70px'} name={'Присоединиться'} size={"medium"}/>
                    : <Button variant={'WHITE'} padding={'17px 34px'} name={'Присоединиться'} size={"medium"}/>}
                </div>
            </div>
        </div>
    );
};

