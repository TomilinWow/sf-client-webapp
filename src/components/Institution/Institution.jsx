import React from 'react';
import Button from "../Button/Button";
import './Institution.css';
import ItemList from "../Institution-list/ItemList";


const Institution = () => {

    return (
      <div>
          <h2>Заведение:</h2>
          <ItemList/>
      </div>
    );
};

export default Institution;
