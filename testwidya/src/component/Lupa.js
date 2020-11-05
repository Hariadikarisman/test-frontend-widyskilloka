import React, { Component } from 'react';
import { Card, Image, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default class Lupa extends Component {
	render() {
		return (
			<div className="App">
	        	<div className="container">
	          		<Card className="cardLupa col">
          				<Card.Body>
          					<Card.Text>
		                		<center><Image variant="top" style={{ width: '200px' }} className="imgLupa" src="asset/image/logo.jpg" /></center>
		              		</Card.Text>
		              		<Container>
		              			<Form.Group className="lupaField" controlId="formBasicPassword">
			                		<Form.Label className="float-left text-muted mb-2 nam">Email</Form.Label>
			                		<Form.Control type="text" size="sm"/>
			              		</Form.Group>
			              		<Button type="submit" block  className="lupaField">
      								Kirim Permintaan Ganti Password
    							</Button>     
       						<p className="lupaBack"><Link to="/login" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faChevronLeft} className="mr-2" />Ke Halaman Login</Link></p>
		              		</Container>
          				</Card.Body>
	          		</Card>
	        	</div>
	      </div>
		);
	}
}
