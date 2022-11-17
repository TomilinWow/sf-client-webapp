import React, {useState} from 'react';
import Button from "../Button/Button";

const Item = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }
    const [counter, setCounter] = useState(0)

    const handleClick1 = () => {
    setCounter(counter + 1)
    }

     const handleClick2 = () => {
     setCounter(counter - 1)
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
            <div>{counter}</div>
            <Button onClick={handleClick1}>+</Button>
            <Button onClick={handleClick2}>-</Button>

        </div>
    );
};

export default Item;
