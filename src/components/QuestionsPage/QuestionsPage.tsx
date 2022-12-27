import React, {useState} from 'react';
import s from './QuestionsPage.module.css'

export const QuestionsPage = () => {
    const [open,setOpen]=useState<boolean>(false)
    const openHandler=()=>{
        setOpen(!open)
    }
    return (
        <>
            <h3 className={s.title}>Часто задаваемые вопросы</h3>
            <div className={s.container}>
                <div className={s.item}><p>Как оценить свою работу?</p>
                    <div className={s.itemArrow} onClick={openHandler}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 8L12 15L5 8" stroke="#232727" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                    {open ?
                    <div className={s.dropdawn}>Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном предложении.</div>
                    :""}
                </div>
                <div className={s.item}>Как оценить свою работу?</div>
                <div className={s.item}>Как оценить свою работу?</div>
                <div className={s.item}>Как оценить свою работу?</div>
                <div className={s.item}>Как оценить свою работу?</div>
                <div className={s.item}>Как оценить свою работу?</div>
                <div className={s.item}>Как оценить свою работу?</div>
                <div className={s.item}>Как оценить свою работу?</div>
            </div>

        </>
    );
};

