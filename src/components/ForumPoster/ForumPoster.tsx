import React from 'react';
import s from './ForumPoster.module.css'
import {Button} from "../../common/Button/Button";

export const ForumPoster = () => {
    return (
        <div className={s.forumPoster}>
            <div className={s.posterContainer}>
                <div className={s.posterContent}>
                    <h4 className={s.title}>Гоу на форум СеллерсХаба в Telegram</h4>
                    <p className={s.text}>Поставь на мьют все темы, кроме интересной тебе</p>
                    <Button variant={'WHITE'} padding={'17px 82px'} name={'Зайти'} size={"medium"}/>
                </div>
            </div>

        </div>
    );
};

