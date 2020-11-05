import React from "react";
import { Card, Form, Col, Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Registrasi() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .required("isian tidak boleh kosong")
    }),
  });

  return (
    <div className="App">
      <div className="container">
        <Card className="cardRegister mt-2 mb-2 col" >
          <Card.Body>
            <center><Image variant="top" style={{ width: '210px' }} className="img" src="asset/image/logo.jpg" /></center>
              <div className="container">
                <Form onSubmit={formik.handleSubmit} className="form">
                  <p className="nama"><strong>Data Perusahaan</strong></p>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword" className="mr-4">
                      <Form.Label className="float-left text-muted mb-2 nam">Nama Perusahaan</Form.Label>
                      <Form.Control type="password" type="text"
                        name="full_name"
                        value={formik.values.full_name}
                        onChange={formik.handleChange} />
                        {formik.errors.full_name && formik.touched.full_name && (
                          <p className="float-left error">{formik.errors.full_name}</p>
                        )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="float-left text-muted mb-2 nam">Website Perusahaan</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </Form.Row>


                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" className="mr-4">
                      <Form.Label className="float-left text-muted mb-2 nam">Nomor Telepon Perusahaan</Form.Label>
                        <InputGroup className="mb-1 mr-sm-2">
                          <InputGroup.Prepend>
                            <InputGroup.Text>+</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl id="inlineFormInputGroupUsername2" placeholder="62" />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label className="float-left text-muted mb-2 nam">bidang Perusahaan</Form.Label>
                        <Form.Control as="select">
                          <option>Select....</option>
                          <option>Software Development</option>
                          <option>Accounting</option>
                          <option>Airlines Aviation</option>
                          <option>Alternative Dispute Resolution</option>
                          <option>Alternative Medicine</option>
                          <option>Animation</option>
                          <option>Apparel & Fashion</option>
                          <option>Architecture & Planning</option>
                          <option>Art & Craft</option>
                          <option>Automotive</option>
                          <option>Aviation & Aerospace</option>
                          <option>Banking</option>
                          <option>Biotechnology</option>
                          <option>Broadcast Media</option>
                          <option>Building & Material</option>
                          <option>Animation</option>
                          <option>Apparel & Fashion</option>
                          <option>Architecture & Planning</option>
                          <option>Art & Craft</option>
                          <option>Automotive</option>
                          <option>Aviation & Aerospace</option>
                          <option>Banking</option>
                          <option>Biotechnology</option>
                          <option>Broadcast Media</option>
                          <option>Building & Material</option>
                        </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <hr className="hr"/>

                  <p className="nama"><strong>Data Diri Anda</strong></p>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" className="mr-4">
                      <Form.Label className="float-left text-muted nam">Nama Perusahaan</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label className="float-left text-muted nam">Website Perusahaan</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" className="mr-4">
                      <Form.Label className="float-left text-muted nam">Email</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="float-left text-muted nam">Nomor Telepon Perusahaan</Form.Label>
                        <InputGroup className="mb-2 mr-sm-2">
                          <InputGroup.Prepend>
                            <InputGroup.Text>+</InputGroup.Text>
                          </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroupUsername2" placeholder="62" />
                        </InputGroup>
                    </Form.Group>
                  </Form.Row>
       
                  <Button type="submit" block  className="btnn" size="sm">
                    Register
                  </Button>
                  <p className="back"><Link to="/login" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faChevronLeft} className="mr-2" />Ke Halaman Login</Link></p>
                </Form>
              </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

