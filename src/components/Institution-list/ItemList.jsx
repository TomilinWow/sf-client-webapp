import React, {useState} from 'react';
import './Institution-list.css';
import {useTelegram} from "../../hooks/useTelegram";
import Item from "../Item/Item";


const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc + item.price
    }, 0)
}

const products = [
    {id: '1', title: 'Пирог', price: 30, description: 'С мясом'},
    {id: '2', title: 'Пирог', price: 30, description: 'С мясом'},
    {id: '3', title: 'Пирог', price: 30, description: 'С мясом'},
    {id: '4', title: 'Пирог', price: 30, description: 'С мясом'},
    {id: '5', title: 'Пирог', price: 30, description: 'С мясом'},
    {id: '6', title: 'Пирог', price: 30, description: 'С мясом'},
    {id: '7', title: 'Пирог', price: 30, description: 'С мясом'},
    {id: '8', title: 'Пирог', price: 30, description: 'С мясом'},
]

const InstitutionList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();


    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems;

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }




    return (
        <div className={'list'}>
            {products.map((item, index) => (
                <Item
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default InstitutionList;

