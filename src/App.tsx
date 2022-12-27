import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import OurResultPage from "./components/OurResultPage/OurResultPage";
import CatalogCards from "./components/CatalogCards/CatalogCards";
import {SpecialistsCards} from "./components/SpecialistsCards/SpecialistsCards";
import {OfferAsaid} from "./components/OfferAsaid/OfferAsaid";
import {PopularCards} from "./components/PopularCards/PopularCards";
import {QuestionsPage} from "./components/QuestionsPage/QuestionsPage";
import {Footer} from "./components/Footer/Footer";
import {OfferPoster} from "./components/OfferPoster/OfferPoster";
import {ForumPoster} from "./components/ForumPoster/ForumPoster";

function App() {
    return (
        <div className="App">
            <div className="main">
                <Header/>
                <MainPage/>
            </div>
            <OurResultPage/>
            <CatalogCards/>
            <SpecialistsCards/>
            <OfferPoster/>
            <OfferAsaid/>
            <PopularCards/>
            <QuestionsPage/>
            <ForumPoster/>
            <Footer/>
        </div>
    );
}

export default App;
