import React from 'react';
import './Cards.modules.css';
import HeadLines from '@headlines/HeadLines';

const Cards = ({ title, items }) => {
	return (
		<div className='card'>
			<HeadLines subTitle='Card' />
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
