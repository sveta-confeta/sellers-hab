import React from 'react';
import s from './Button.module.css'


type ButtonPropsType = {
    variant: "BLUE" | "WHITE"
    name?: string
    padding: string
    active?: boolean
    disabled?: boolean

}

export const Button: React.FC<ButtonPropsType> = ({  variant,
                                                      name,
                                                      padding,active, disabled
                                                  }) => {


    return (
        // props.name === 'x' ?
        // <IconButton disabled = {props.disabledStatus==='loading'}
        //             aria-label="delete" onClick={onClickHandler} style={{minHeight:'10px',maxWidth:'10px' }} ><Delete/> </IconButton> :
         variant==="BLUE"
        ?  <button className={`${s.btn} ${s.blue} ${active}`} disabled={disabled} style={{
            padding,
            }}>{name}</button>
            :  <button className={`${s.btn} ${active} `} disabled={disabled} style={{
                padding,
            }}>{name}</button>




    );
};

