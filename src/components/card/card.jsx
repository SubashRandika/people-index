import React from 'react';
import './card.styles.css';

const Card = ({ person }) => (
	<div className='card-container'>
		<div>
			<img src={person.avatar} alt='person' />
		</div>
		<h2>{person.name}</h2>
		<p>{person.email}</p>
	</div>
);

export default Card;
