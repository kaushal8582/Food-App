import React from 'react';
import MealItem from './MealItem';
// import Card from '../UI/Card';
import './MealList.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.50,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 78.99,
  },
];

const MealList = () => {
 

  return (
    <section className="meals">
        <ul>{
            DUMMY_MEALS.map((meal) => (
                <MealItem
                    key={meal.id}
                    id={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                />
            ))
          }</ul>
    </section>
  );
};

export default MealList;
