import React, {useState} from 'react';
import s from './QuestionItem.module.css'
type QuestionItemType={
    title:string
}
export const QuestionItem = (props:QuestionItemType) => {
    const [open, setOpen] = useState<boolean>(false)
    const openHandler = () => {
        setOpen(!open)
    }
    return (
        <div className={s.item}><p>Как оценить свою работу?</p>
            <div className={s.itemArrow} onClick={openHandler}> {
                open ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 16L12.5 9L19.5 16" stroke="#357EFE"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    :  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                        <path  className={s.itemIcon} d="M19 8L12 15L5 8" stroke="#232727" strokeWidth="2" strokeLinecap="round"
                               strokeLinejoin="round"/>
                    </svg>

            }

            </div>
            {open ?
                <div className={s.dropdawn}>Вопрос с подвохом! В Fever вы платите фрилансерам за проект, а
                    не за час. Цена за услугу и все, что входит в нее, четко указана в их проектном
                    предложении.</div>
                : ""}
        </div>
    );
};

