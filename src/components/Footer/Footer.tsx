import React from 'react';
import s from './Footer.module.css'
import Logo from './../../assets/logo.png'

export const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <div className={s.footerContent}>

                    <img className={s.footerLogo} src={Logo}/>
                    <div className={s.soc}>
                        <p>Будтье в курсе новостей!</p>
                        <ul className={s.soc_link}>
                            <li className={s.vk}><a href={'#'} aria-label="Ссылка на вконтакте">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect className={s.vkIcon} width="40" height="40" rx="20" fill="#0077FF"/>
                                    <path
                                        d="M20.9825 27C13.466 27 9.17864 21.7447 9 13H12.7651C12.8888 19.4184 15.6646 22.1371 17.8632 22.6977V13H21.4085V18.5355C23.5796 18.2973 25.8607 15.7748 26.6302 13H30.1755C29.8855 14.4391 29.3075 15.8017 28.4776 17.0025C27.6477 18.2033 26.5837 19.2166 25.3523 19.979C26.7269 20.6756 27.941 21.6615 28.9145 22.8717C29.888 24.082 30.5988 25.489 31 27H27.0974C26.7373 25.6876 26.0054 24.5128 24.9934 23.6228C23.9814 22.7328 22.7343 22.1673 21.4085 21.997V27H20.9825Z"/>
                                </svg>
                            </a>
                            </li>
                            <li className={s.tg}><a href={'#'} aria-label="Ссылка на телеграмм">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect className={s.tgIcon} width="40" height="40" rx="20" fill="#27A6E5"/>
                                    <path
                                        d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022V12.6022Z"/>
                                </svg>
                            </a>
                            </li>
                            <li className={s.youTub}><a href={'#'} aria-label="Ссылка на ютуб">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect className={s.ytIcon} width="40" height="40" rx="20" fill="#F40000"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.2625 27.0568C10.8702 26.9408 10.5123 26.7343 10.219 26.4549C9.9256 26.1754 9.7054 25.8312 9.57695 25.4512C8.84292 23.4874 8.62543 15.2869 10.0391 13.6681C10.5096 13.1414 11.1739 12.8172 11.8878 12.7658C15.6802 12.3677 27.3975 12.4208 28.7432 12.8985C29.1217 13.0183 29.4675 13.2203 29.7547 13.4891C30.0419 13.758 30.263 14.0868 30.4015 14.451C31.2035 16.4812 31.2307 23.8589 30.2928 25.8095C30.044 26.3173 29.6275 26.7285 29.1102 26.9772C27.6965 27.6672 13.1383 27.6539 11.2625 27.0568ZM17.2842 23.2087L24.0808 19.7587L17.2842 16.2821V23.2087Z"/>
                                </svg>
                            </a>
                            </li>

                        </ul>
                    </div>


                <div className={s.footerNav}>
                    <ul className={s.product}>
                        <li><h4>Продукт</h4></li>
                        <li><a href={'#'}>Каталог</a></li>
                        <li><a href={'#'}>Вопросы и ответы</a></li>
                        <li><a href={'#'}>Блог</a></li>
                        <li><a href={'#'}>О компании</a></li>
                        <li><a href={'#'}>Помощь</a></li>
                    </ul>
                    <ul className={s.categories}>
                        <li><h4>Категории</h4></li>
                        <li><a href={'#'}>SMM</a></li>
                        <li><a href={'#'}>Видео и аудио</a></li>
                        <li><a href={'#'}>Поддержка</a></li>
                        <li><a href={'#'}>Копирайтинг</a></li>
                        <li><a href={'#'}>Все сравнения</a></li>

                    </ul>
                    <ul className={s.next}>
                        <li><a href={'#'}>Разработка</a></li>
                        <li><a href={'#'}>Маркетинг</a></li>
                        <li><a href={'#'}>Музыка</a></li>
                        <li><a href={'#'}>Бизнес</a></li>
                        <li><a href={'#'}>Дизайн</a></li>
                    </ul>

                </div>

            </div>
            <div className={s.footerInfoPanel}>
                <p className={s.hub}>© 2022 Sellershub.</p>
                <div className={s.InfoPanelwrapper}>
                    <p >Условия использования</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>

        </div>
    );
};
