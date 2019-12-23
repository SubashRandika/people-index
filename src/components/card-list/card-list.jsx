import React from 'react';
import Card from '../card/card';
import './card-list.styles.css';

const CardList = ({ people }) => (
	<div className='card-list'>
		{people.map((person) => (
			<Card key={person.id} person={person} />
		))}
	</div>
);

export default CardList;
