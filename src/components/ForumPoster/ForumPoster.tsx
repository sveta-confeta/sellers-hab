import React, {useEffect, useState} from 'react';
import s from './ForumPoster.module.css'
import {Button} from "../../common/Button/Button";

export const ForumPoster = () => {
    const [media, setMedia] = useState<boolean>(false)

    useEffect(() => {
        if (window.innerWidth < 828) {
            setMedia(true)
        }
    }, [window.innerWidth]);
    return (
        <div className={s.forumPoster}>
            <div className={s.posterContainer}>
                <div className={s.posterContent}>
                    <h4 className={s.title}>Гоу на форум СеллерсХаба в Telegram</h4>
                    <p className={s.text}>Поставь на мьют все темы, кроме интересной тебе</p>
                    {media ? <Button variant={'WHITE'} padding={'17px 119px'} name={'Зайти'} size={"medium"}/> :
                    <Button variant={'WHITE'} padding={'17px 82px'} name={'Зайти'} size={"medium"}/>}
                </div>
            </div>

        </div>
    );
};

