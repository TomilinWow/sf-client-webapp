import React from 'react';

import './Home.css';
import {useTelegram} from "../../hooks/useTelegram";


const Home = () => {

    const {user} = useTelegram()
    return (
        <div className={'home'}>
            Добро пожаловать в webapp client
            {user?.photo_url}
        </div>
    );
};

export default Home;
