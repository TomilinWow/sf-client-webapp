import React from 'react';
import Button from "../Button/Button";

const Item = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }
     const [counter,setCounter]= useState(0);

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
            <Counter>{counter}</Counter>
            <Button onClick={()=>setCounter(conter+1)}>+</Button>
        </div>
    );
};

export default Item;
