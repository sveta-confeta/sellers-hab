import React from 'react';
import s from './CatalogCard.module.css'
import {Button} from "../../../common/Button/Button";

type CatalogCardType={
    title:string
    text:string
    img?:string
    name?:string
}

export const CatalogCard = (props:CatalogCardType) => {
    return (
        <div className={s.card}>
            <h4 className={s.cardTitle}>{props.title}</h4>
            <p className={s.cardText}>{props.text}</p>
            {/*{props.img ?*/}
            {/*    <img src={props.img} className={s.cardImg}/>*/}
            {/*:  <Button name={props.name}/>  }*/}
        </div>
    );
};

