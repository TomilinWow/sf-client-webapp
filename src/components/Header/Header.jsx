import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, photo, onClose} = useTelegram();
    console.log(user?.photo)
    return (
        <div className={'header'}>
            <Button ClassName='bt' onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
