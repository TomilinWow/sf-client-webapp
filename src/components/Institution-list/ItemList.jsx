import React, {useState} from 'react';
import './Institution-list.css';
import {useTelegram} from "../../hooks/useTelegram";
import Item from "../Item/Item";
import axios, {Axios} from "axios";


const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc + item.price
    }, 0)
}




const InstitutionList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const [items, setItems] = useState([]);

    useEffect(() => {
        const apiCatalog = 'http://street.test/api/catalog';

        axios.post(apiCatalog).then(function (response) {
            const catalog = response.data;
            setItems(catalog);
        })
            .catch(function (error) {
                console.log(error);
            });
    }, [setItems])

    items.map(item => {
        console.log(item.id)
    })


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
            {items.map((item) => (
                <Item>
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                </Item>

            ))}
        </div>
    );
};



export default InstitutionList;


