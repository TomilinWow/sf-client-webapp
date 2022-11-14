import React from 'react';
import Institution from "../Institution/Institution";
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";

const Stars = () => {

    const history = useNavigate()

    const getInstitution = () => {
        history('/institution')
    }
    return (
        <div className='home'>
            <Button className={'stars'} onClick={getInstitution}>Пекарня от Ивана</Button>
            <Button className={'stars'} onClick={getInstitution}>Кофейня 228</Button>
            <Button onClick={getInstitution}>Шаурма №1</Button>
        </div>
    );
};

export default Stars;
