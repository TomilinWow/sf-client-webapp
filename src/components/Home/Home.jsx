import React from 'react';

import './Home.css';
import {useTelegram} from "../../hooks/useTelegram";
import ProgressBar from "../ProgressBar/ProgressBar";


const Home = () => {

    const {user} = useTelegram()
    return (
        <div className={'home'}>
            Добро пожаловать в webapp client
            <ProgressBar/>
        </div>
    );
};

export default Home;
