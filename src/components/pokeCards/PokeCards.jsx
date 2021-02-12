import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CardContent } from '../cardContent/CardContent';
export const PokeCards = ({dataPokemon}) => {
	const cardPoke = dataPokemon.arrayPokemon.map((poke) => (		
		<Col key={poke.pokemon.name}>
			<CardContent 
						 name={poke.pokemon.name} 
						 url={poke.pokemon.url}/>
		</Col>
	));

	return (		
		<Container>
			<Row>{cardPoke}</Row>
		</Container>		
	)
}
