import React from 'react';
import Button from "../Button/Button";
import './Institution.css';
import InstitutionList from "../Institution-list/Institution-list";


const Institution = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
            <InstitutionList></InstitutionList>
        </div>
    );
};

export default Institution;
