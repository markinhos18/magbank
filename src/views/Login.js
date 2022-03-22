import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import Logo from "../assets/logo.svg";

import "./Login.scss";

const Login = () => (
    <section className="login">
        <div className="login_container"> 
            <Row>
                <Col className="text-center text-light">
                    <Image className="p-5" src={Logo} />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className="lead">
                                <strong>Número de conta</strong>
                            </Form.Label>
                            <Form.Control type="number" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="lead">
                                <strong>Senha</strong>
                            </Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>
                        <Link to='/Dashboard'>
                            <Button variant="success"  className="btn-purple mt-3"  type="submit">
                                Criar conta
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </div>
    </section>
);

export default Login;