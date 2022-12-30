import React, {useEffect, useState} from 'react';
import s from './CatalogCard.module.css'
import {Button} from "../../../common/Button/Button";

type CatalogCardType = {
    title: string
    text: string
    img?: string
    name?: string
    className?: any
}


export const CatalogCard = (props: CatalogCardType) => {
    const [media, setMedia] = useState<boolean>(false)

    useEffect(() => {
        if (window.innerWidth < 1250) {
            setMedia(true)
        }
    }, [window.innerWidth]);

    return (
        <div className={s.card}>
            <h4 className={s.cardTitle}>{props.title}</h4>
            <p className={s.cardText}>{props.text}</p>
            {props.img ?
                <img src={props.img} className={props.className}/>
                : <div className={props.className}>
                    {media? <Button name={"Cмотреть еще 23 каталога"} size={'medium'}
                                                           variant={'BLUE'} padding={"17px 28px"}/>
            : <Button name={"Cмотреть еще 23 каталога"} size={'medium'}
                      variant={'BLUE'} padding={"17px 44px"}/>} </div>}
        </div>
    );
};

