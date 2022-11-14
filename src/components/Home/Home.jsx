import React from 'react';

import './Home.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../Button/Button";


const Home = () => {

    const {user} = useTelegram()
    return (
        <div className={'home'}>
            <h2>Добро пожаловать в webapp client</h2>
            <div className={'level'}>
                <span>Твой уровень:</span>
                <ProgressBar/>
            </div>

            <Button className='stars'>Избранные заведения</Button>
            <Button>Поиск заведения</Button>
        </div>
    );
};

export default Home;
