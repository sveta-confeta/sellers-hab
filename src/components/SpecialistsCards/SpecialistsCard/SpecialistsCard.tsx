import React from 'react';
import s from "../../SpecialistsCards/SpecialistsCard/SpecialistsCard.module.css";

type CardsType={
    src?:any
    title?:string
    text?:string
    poster?:string
}

export const SpecialistsCard = (props:CardsType) => {
    return (

        <div className={s.cardWrapper}>
            <div className={s.contentVideo}>
                <video autoPlay muted poster={props.poster} loop>
                    <source src={props.src} type="video/mp4" className={s.video}/>
                </video>
            </div>
            <h4 className={s.title}>{props.title}</h4>
            <p className={s.text}>{props.text}</p>
        </div>

    );
}