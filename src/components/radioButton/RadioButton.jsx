import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'

export const RadioButton = ({setNumPokes}) => {
	const handleInputRadioPokemon = ({target}) => {
		setNumPokes(target.value)
	}
	return (
		<fieldset>
		<Form.Group as={Row}>
		  <Form.Label as="legend" column sm={12}>
		  	Pokemons Number
		  </Form.Label>
		  <Col>
			<Form.Check
			  name="formRadios"
			  type="radio"
			  label="10"
			  value={10} 
			  onChange={handleInputRadioPokemon}
			/>
		  </Col>
		  <Col>
			<Form.Check
			  name="formRadios"
			  type="radio"
			  label="20"
			  value={20}
			  onChange={handleInputRadioPokemon}
			/>
		  </Col>
		  <Col>
			<Form.Check
			  name="formRadios"
			  type="radio"
			  label="30"
			  value={30}
			  onChange={handleInputRadioPokemon}
			/>
		  </Col>
		</Form.Group>
	  </fieldset>
	)
}
