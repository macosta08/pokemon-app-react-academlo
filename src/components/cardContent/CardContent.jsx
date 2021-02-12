import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { getPokeImg } from '../../Utils/callsPokemonApi';
import './cardContent.css';
export const CardContent = ({name, url}) => {
	const [pokePicture, setpokePicture] = useState("");
    useEffect(() => {

		getPokeImg({url, setpokePicture});
		
    }, [name, url]); 

	return (
		<Card style={{ width: '18rem' }} className='card'>
			<Card.Img variant="top" src={pokePicture} />
			<Card.Body className='container-body'>
				<Card.Title><h2>{name}</h2></Card.Title>
			</Card.Body>
		</Card>
	)
}
