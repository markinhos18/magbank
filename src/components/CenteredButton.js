import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const CenteredButton = ({children}) => (
    <Container>
        <Row className="d-flex justify-content-center">
            <Button className="my-5" variant="success" size="lg">
                {children}
            </Button>
        </Row>
    </Container>
);

export default CenteredButton;