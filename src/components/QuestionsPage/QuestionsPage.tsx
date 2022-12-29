import React from 'react';
import s from './QuestionsPage.module.css'
import {QuestionItem} from "./QuestionItem/QuestionItem";

export const QuestionsPage = () => {

    return (
        <>
            <h3 className={s.title}>Часто задаваемые вопросы</h3>
            <div className={s.main_container}>
                <div className={s.container}>
                    <QuestionItem title={'Как оценить свою работу?'}/>
                    <QuestionItem title={'Как оценить свою работу?'}/>
                    <QuestionItem title={'Как оценить свою работу?'}/>
                    <QuestionItem title={'Как оценить свою работу?'}/>

                </div>

                <div className={s.container}>
                    <QuestionItem title={'Как оценить свою работу?'}/>
                    <QuestionItem title={'Как оценить свою работу?'}/>
                    <QuestionItem title={'Как оценить свою работу?'}/>
                    <QuestionItem title={'Как оценить свою работу?'}/>
                </div>
            </div>


        </>
    );
};

