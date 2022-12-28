import React from 'react';
import {Button} from "../../../common/Button/Button";
import s from './PopularCard.module.css'

type PopularCardType={
    src:string
    name:string
    title:string
    info:string
    alt:string
    price:number
}

export const PopularCard = (props:PopularCardType) => {
    return (
        <div className={s.popularCardWrapper}>
            <img className={s.popularCardImg} src={props.src} alt={props.alt}/>
            <div className={s.cardItems}>
            <h4 className={s.title}>{props.title}</h4> <span>oт{props.price}&#8381;</span>
            </div>
            <p className={s.info}>{props.info}</p>
            <Button variant={'BLUE'} padding={'17px 97px'} name={props.name} size={"medium"}/>

        </div>
    );
};

