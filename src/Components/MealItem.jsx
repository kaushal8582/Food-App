import React, { useState } from 'react';
import './MealItem.css';
import { useContext } from 'react';
import CartContext from '../store/cart-context';

const MealItem = (props) => {

  const [amount,setAmount] = useState(1);

  const price = `$${props.price.toFixed(2)}`;
  const {addItem} = useContext(CartContext);


  const addItemHandler = () => {
    addItem({
      id: props.id,
      name: props.name,
      amount: +amount,
      price: props.price
    })
  }



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
          <input onChange={(e)=>setAmount(e.target.value)} type="number" id="amount" min="1" max="100" defaultValue="1" />
        </label>
        <button onClick={addItemHandler} className='button'>+ Add</button>
      </div>
    </li>
  );
};

export default MealItem;
