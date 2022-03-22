import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Button  } from "react-bootstrap";
import Pagamentos from  '../components/Pagamentos';
import Extrato  from  '../components/Extrato';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircle } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";

import "./Dashboard.scss";

const Dashboard = ({ className = false }) => {

    const [ activeLink, setActiveLink ] = useState(0);

    const links = [
        { text: 'Minha Conta', path: '/dashboard', exact: true },
        { text: 'Pagamentos', path: 'pagamentos'},
        { text: 'Extrato', path: 'extrato'},
    ];

    const data = {

        latestData: [
            { date: '22/07', description: 'SAQUE 24h 012345', value: '300,00' },
            { date: '21/07', description: 'SUPERMERCADO 02323626', value: '275,00' },
            { date: '20/07', description: 'NETFLIX 235236', value: '30,00' },
            { date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },
            { date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },
        ],

        futureData: [
            { date: '22/08', description: 'SALÁRIO 012345', value: '3000,00' },
            { date: '21/08', description: 'IMAGINE 02323626', value: '275,00' },
            { date: '20/08', description: 'NETFLIX 235236', value: '30,00' },
            { date: '15/08', description: 'FARMÁCIA 12125', value: '350,00' },
        ],
    };   

    


    return(
        <Container className={`dashboard py-5 ${className ? className : ''}`}>
            <Row>
                <Col xs={12} lg={4}>
                    <Row className="align-items-center mb-5">
                        <Col xs={3}>
                            <span className="dashboard__user-avatar">
                                <FontAwesomeIcon icon={faCircle} size='5x' color="#F2F2F2"/> 
                                <FontAwesomeIcon className="dashboard__user-icon" icon={faUser} size='3x' color="#555555"/> 
                            </span>
                        </Col>
                        <Col xs={9}>
                            <h3>Marcos Felipe</h3>
                            <p className="text-muted">ag: 1234 c/c 4321-5</p>
                        </Col>
                    </Row>

                    {links.map(({ text, path, exact}, key) => (

                        <Link to={path} exact={exact ? exact : false} key={key} >

                            <Button className={`dashboard_button py-3 ${key === activeLink ? 'active' : ''}`} size="lg" variant="link" block onClick={() => setActiveLink(key)}>{text}</Button>

                        </Link>
                    ))}
                     
                </Col>
                <Routes>

                    <Route path="/" element={<AccountBalance data={data} />}/>

                    <Route path="pagamentos" element={<Pagamentos data={data} />} />

                    <Route path="extrato" element={<Extrato data={data} />} />      
 
                </Routes>
            </Row>
        </Container>
    )

};

export default Dashboard;