import React from 'react'
import { Form } from 'react-bootstrap'
import { RadioButton } from '../radioButton/RadioButton';

export const SearchInput = ({pokemonTypes, setSearchType, setNumPokes}) => {

	const typePokemon = pokemonTypes.map( type => (
		<option key={type.name}>{type.name}</option>
	));

	const handleInputSelectTypePokemon = ({target}) => {
		setSearchType(target.value);
	};

	
	
	return (
		<div>
			<Form>
				<Form.Group controlId="exampleForm.ControlSelect1">
    				<Form.Label>Type Pokemon</Form.Label>
    				<Form.Control 
						as="select"
						name='typePoke'
						onChange={handleInputSelectTypePokemon} 
					>
						<option>Select one</option>
      					{typePokemon}
    				</Form.Control>
  				</Form.Group>
				  <RadioButton setNumPokes={setNumPokes} />
			</Form>
		</div>
	)
}
