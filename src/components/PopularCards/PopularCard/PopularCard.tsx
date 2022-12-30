import React, {useEffect, useState} from 'react';
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
    const [media, setMedia] = useState<boolean>(false)

    useEffect(() => {
        if (window.innerWidth < 1250) {
            setMedia(true)
        }
    }, [window.innerWidth]);
    return (
        <div className={s.popularCardWrapper}>
            <img className={s.popularCardImg} src={props.src} alt={props.alt}/>
            <div className={s.cardItems}>
            <h4 className={s.title}>{props.title}</h4> <span className={s.price}>oт {props.price} &#8381;</span>
            </div>
            <p className={s.info}>{props.info}</p>
            {media ?  <Button variant={'BLUE'} padding={'17px 68px'} name={props.name} size={"medium"}/> :
            <Button variant={'BLUE'} padding={'17px 91px'} name={props.name} size={"medium"}/>}

        </div>
    );
};

