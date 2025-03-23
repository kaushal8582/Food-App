import React from 'react';
import './MealItem.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div className='add' >
        <label htmlFor="amount">
          Amount : 
          <input type="number" id="amount" min="1" max="100" defaultValue="1" />
        </label>
        <button className='button'>+ Add</button>
      </div>
    </li>
  );
};

export default MealItem;
