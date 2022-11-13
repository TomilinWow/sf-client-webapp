import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, photo, onClose} = useTelegram();
    console.log(user?.photo)
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <img src={user?.photo} alt='kek'/>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
