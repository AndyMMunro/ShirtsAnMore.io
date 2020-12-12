import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC FASHION FINDS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/women3.jpg'
              text='Life is so much better when you have an online order on the way'
              label='Women'
              path='/products'
            />
            <CardItem
              src='images/watches1.jpg'
              text='I like my money right where I can see it; Hanging around my wrist'
              label='Accessories'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/guy2.jpg'
              text='Fashion is what you buy, style is what you do with it'
              label='Men'
              path='/products'
            />
            <CardItem
              src='images/GIRLSITTING.jpg'
              text='Always need to look by best for Tiktok videos, live feeds and Zoom Class'
              label='Teens'
              path='/products'
            />
            <CardItem
              src='images/2kids2.jpg'
              text='Fashion is a little part of childhood it can never be lost'
              label='Kids'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;