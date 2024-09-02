/* import styles from './Cards.modules.css'; */
import React from 'react';
import './Cards.modules.css';

const Cards = ({ title, items }) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <ul>
        {items && items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;

