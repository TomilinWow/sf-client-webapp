import React, {useState} from 'react';
import Button from "../Button/Button";
import './Item.css';
import {useNavigate} from "react-router-dom";
const Item = ({product, className, onAdd}) => {

    const history = useNavigate()

    const addCart = () =>{
        history('/Cart')
    }


    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
        setCounter(counter + 1);
        onAdd(product);

    }

    const handleClick2 = () => {
        setCounter(counter - 1);
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
            <Button className={'add-btn'} onClick={addCart}>
                Добавить в корзину
            </Button>
            {
                counter > 0
                    ? <div>{counter}</div>
                    : null
            }
            <Button className={'add-btn'} onClick={handleClick1}>+</Button>
            <Button className={'add-btn'} onClick={handleClick2}>-</Button>


        </div>
    );
};

export default Item;
