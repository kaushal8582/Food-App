import React from 'react';
import mealsImage from '../assets/meal.jpg'; // You'll need to add this image
import './BackgroundImage.css';

const BackgroundImage = () => {
  return (
    <div className="main-image">
      <img src={mealsImage} alt="A table full of delicious food" />
    </div>
  );
};

export default BackgroundImage;
