import React from 'react';
import './Cards.modules.css';

const Cards = ({ title, items }) => {
	return (
		<div className='card'>
			<h2>{title}</h2>
			<ul>
				{items && items.map((item, index) => <li key={index}>{item}</li>)}
			</ul>
			<input
				type='text'
				placeholder='Skriv något här...'
				style={{ width: '300px', height: '60px' }}
			/>
		</div>
	);
};

export default Cards;
