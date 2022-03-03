import React from "react";
import { Container, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faWallet, faShield, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.svg";
import './Footer.scss';

const Footer = () => (
    <footer className="footer py-3">
        <Container fluid className="px-5">
            <Row>
                <Col className="d-flex align-items-center justify-items-center">
                    <Image src={Logo} width="60"  alt="NuBank logo" />
                </Col>
                <Col className="d-flex align-items-center justify-items-center">
                    <p>© 2021  Nu Pagamentos S.A - Instituição de Pagamento.  18.236.120/0001-58 Rua Capote Valente, 39 - São Paulo, SP - 05409-000</p>
                </Col>
                <Col>
                    <div class="Social-dxbrx9-0 jwQMJv">
                        <a class="sc-qZtCU AgwVi sc-oUoif fnZucx StyledLink-sc-126lr5p-0 dZdtGM" aria-label="Navegar para o nosso perfil no Facebook" href="https://www.facebook.com/nubank" target="_blank" rel="noopener">
                            
                        </a>
                        
                        <a class="sc-qZtCU AgwVi sc-oUoif fnZucx StyledLink-sc-126lr5p-0 dZdtGM" aria-label="Navegar para o nosso perfil no Instagram" href="https://www.instagram.com/nubank/" target="_blank" rel="noopener">
                            
                        </a>

                        <a class="sc-qZtCU AgwVi sc-oUoif fnZucx StyledLink-sc-126lr5p-0 dZdtGM" aria-label="Navegar para o nosso perfil no LinkedIn" href="https://www.linkedin.com/company/nubank" target="_blank" rel="noopener">
                           
                        </a>

                        <a class="sc-qZtCU AgwVi sc-oUoif fnZucx StyledLink-sc-126lr5p-0 dZdtGM" aria-label="Navegar para o nosso canal no Youtube" href="https://www.youtube.com/nubank" target="_blank" rel="noopener">
                            
                        </a>

                        <a class="sc-qZtCU AgwVi sc-oUoif fnZucx StyledLink-sc-126lr5p-0 dZdtGM" aria-label="Navegar para o nosso perfil no Twitter" href="https://twitter.com/nubank" target="_blank" rel="noopener">
                            
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;