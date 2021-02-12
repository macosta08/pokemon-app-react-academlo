import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';


export const ButtonSubmit = () => {
	return (
		<Form.Group as={Row}>
		<Col sm={{ span: 10, offset: 2 }}>
		  <Button type="submit">Sign in</Button>
		</Col>
	  </Form.Group>
	)
};
