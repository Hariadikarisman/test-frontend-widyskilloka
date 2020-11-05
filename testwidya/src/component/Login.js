import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Image, Form, Container, InputGroup, FormControl, OverlayTrigger, Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Card className="cardLogin col">
            <Row>
              <Col md={5}>
                <Card.Body>
                  <Card.Text>
                    <center><Image variant="top" style={{ width: '200px' }} className="imgLogin" src="asset/image/logo.jpg" /></center>
                  </Card.Text>
                  <Container className="mt-5">
                    <Form.Group className="loginField" controlId="formBasicPassword">
                      <Form.Label className="float-left text-muted mb-2 nam">Email / Telepon</Form.Label>
                      <Form.Control type="email" placeholder="email" />
                    </Form.Group>

                    <Form.Group className="loginField" controlId="formBasicPassword">
                      <Form.Label className="float-left text-muted mb-2 nam">Password</Form.Label>
                      <InputGroup className="mb-1 mr-sm-2">
                        <FormControl id="inlineFormInputGroupUsername2" placeholder="Password" />
                        <InputGroup.Prepend>
                          <InputGroup.Text><FontAwesomeIcon icon={faEye}/></InputGroup.Text>
                        </InputGroup.Prepend>
                      </InputGroup>
                    </Form.Group>

                    <p className="link"><Link to="/Lupa" className="pass">Lupa Password</Link></p>
                    
                    <Form.Group className="loginField" controlId="formBasicPassword">
                      <Button type="submit" block  className="btn mt-5">
                        Login
                      </Button>
                    </Form.Group>
                    <p className="daftarPerusahaan"><Link to="/"><center>Daftar Sebagai Perusahaan</center></Link></p>

                    <div>
                      <>
                        {['top'].map((placement) => (
                          <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                              <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Content><a href="" className="bahasaPilih" style={{ textDecoration: 'none' }}>Bahasa Indonesia</a></Popover.Content>
                                <Popover.Content>
                                  <a href="" className="bahasaPilih" style={{ textDecoration: 'none' }}>English ( US )</a>
                                </Popover.Content>
                              </Popover>
                            }
                          >
                            <Button className="bahasa" size="sm">Bahasa Indonesia <FontAwesomeIcon icon={faCaretDown}/></Button>
                          </OverlayTrigger>
                        ))}
                      </>
                    </div>
                  </Container>
                </Card.Body>
              </Col>
              <Col md={5} className="d-none d-lg-block">
                <Image variant="top" className="background" src="asset/image/work.jpg" />
              </Col>
            </Row>
          </Card>  
        </div>
      </div>
    );
  }
}

