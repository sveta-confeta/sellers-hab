import React from 'react';
import s from './Main.module.css'
import {Button} from "../../common/Button/Button";
import mainPoster from '../../assets/MainPoster.png'




const MainPage = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={s.content}>
                <h1 className={s.title}>Хаб <span>№1 </span>онлайн продавцов</h1>
                <h2 className={s.text}>Повышай продажи на Wildberries и Озон со всем инструментами, специалистами и сообществом</h2>
                <div className={s.btnGroup}>
                    <Button name={'Разместить услугу'} variant={'BLUE'} padding={'17px 29px'} size={"medium"} />
                    <Button name={'Найти специалиста'} variant={'WHITE'} padding={'17px 23px'} size={"medium"}/>
                </div>
            </div>

            <div className={s.contentVideo}>
                <video autoPlay  muted poster={mainPoster}  loop >
                    <source src={require('../../assets/video/Main.mp4')} type="video/mp4" className={s.video}/>
                </video>
            </div>

        </div>
    );
};

export default MainPage;