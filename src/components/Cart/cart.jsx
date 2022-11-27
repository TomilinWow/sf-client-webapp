import React from 'react';


export const  Cart =({product, className,}) => {
    return (
    <div>
        <h2>Корзина</h2>
        <div className={'product ' + className}>
            <div className={'img'}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
        </div>
    </div>
    );
};
