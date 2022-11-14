import React from 'react';

import './Home.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";


const Home = () => {

    const {user} = useTelegram()
    const history = useNavigate()

    const getStars = () => {
        history('/stars')
    }


    return (
        <div className={'home'}>
            <h3>Добро пожаловать в webapp client</h3>
            <div className={'level'}>
                <span>Твой уровень:</span>
                <ProgressBar/>
            </div>

            <Button className='stars' onClick={getStars}>Избранные заведения</Button>
            <Button>Поиск заведения</Button>

        </div>
    );
};

export default Home;
