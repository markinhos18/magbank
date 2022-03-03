import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faWallet, faShield, faUserTie } from "@fortawesome/free-solid-svg-icons";
import './Faq.scss';


const Faq = () => { 
    const options = [
        { icon: faCreditCard, text: 'Cartão de crédito'},
        { icon: faWallet, text: 'Conta e abertura'},
        { icon: faShield, text: 'Token digital'},
        { icon: faUserTie, text: 'Produtos e Serviços'}
    ];

    const [ index, setIndex ] = useState(0);

    const handleClick = (key) => {
        setIndex(key);
    };

    useEffect(() => {
        console.log(index);
    }, [index])

    return (
    <section className="faq py-5">
        <Container>
            <Row>
                <h2 className="my-5 text-center pb-3">Dúvidas frequentes</h2>
            </Row>
            <Row  className="d-flex align-items-center justify-items-center pb-5">
                <Col xs={12} lg={6}>

                    <Row className="mb-4 d-flex justify-content-around" >
                        {options.map(({ icon, text }, key) => (
                            <div className="itens mb-4" key={key}>
                                <Col xs={2} className="d-flex justify-content-center align-items-center" onClick={() => handleClick(key)}>
                                    <FontAwesomeIcon icon={icon}  className='fa'  color={key === index ? 'white' : '#BBB'} />
                                </Col>
                                <Col xs={11} className="d-flex align-items-center d-none d-sm-block" color={key === index ? 'white' : '#BBB'} onClick={() => handleClick(key)}>{text}</Col>
                            </div>
                        ))}
                    </Row>
                    <Row className="justify-content-center d-block d-sm-none text-center py-5">
                        <p>{options[index].text}</p>
                    </Row>

                </Col>

                <Col xs={12} lg={6}>
                    <Accordion defaultActiveKey='0' activeKey={`${index}`}>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Cartão de crédito e débito</Accordion.Header>
                                <Accordion.Body>
                                    Pode chamar ele de roxinho. Além disso, pode chamar também de moderno, gratuito e prático.
                                </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Conta e abertura</Accordion.Header>
                                <Accordion.Body>
                                    Você no controle: receba, movimente e guarde seu dinheiro de um jeito simples.
                                </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Token digital</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Produtos e serviços</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Col>
            </Row>
          
        </Container>
    </section>
)};

export default Faq;