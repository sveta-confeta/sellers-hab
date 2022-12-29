import React from 'react';
import s from './CatalogCard.module.css'
import {Button} from "../../../common/Button/Button";

type CatalogCardType={
    title:string
    text:string
    img?:string
    name?:string
    className?:any
}


export const CatalogCard = (props:CatalogCardType) => {
    return (
        <div className={s.card}>
            <h4 className={s.cardTitle}>{props.title}</h4>
            <p className={s.cardText}>{props.text}</p>
            {props.img ?
                <img src={props.img} className={props.className}/>
                :  <div className={props.className}> <Button name={"Cмотреть еще 23 каталога"} size={'medium'} variant={'BLUE'} padding={"17px 44px"}/></div>  }
        </div>
    );
};

