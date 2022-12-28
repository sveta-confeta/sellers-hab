import React from 'react';
import s from './Button.module.css'


type ButtonPropsType = {
    variant: "BLUE" | "WHITE"
    name: string
    padding: string
    active?: boolean
    disabled?: boolean
    size: "small" |"medium"
}

export const Button: React.FC<ButtonPropsType> = ({  variant,size,
                                                      name,
                                                      padding,active, disabled
                                                  }) => {


    let sx = {
        borderRadius: '10px',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px',
        cursor: 'pointer',
        textTransform: 'none!important',
        transition: 'background 1s ease-in',
    };




    return (
        size==="small" ?
            (  variant==="BLUE"
        ?  <button className={`${s.btn} ${s.blue} ${active}  ${s.small} `} disabled={disabled} style={{
            padding
            }}>{name}</button>
            :  <button className={`${s.btn} ${active}  ${s.white}  ${s.small}`} disabled={disabled} style={{
                padding
            }}>{name}</button>)
:
            (  variant==="BLUE"
                ?  <button className={`${s.btn} ${s.blue} ${active}  ${s.medium}`} disabled={disabled} style={{
                    padding
                }}>{name}</button>
                :  <button className={`${s.btn} ${active}  ${s.white}  ${s.medium}`} disabled={disabled} style={{
                    padding
                }}>{name}</button>)


    );

};

