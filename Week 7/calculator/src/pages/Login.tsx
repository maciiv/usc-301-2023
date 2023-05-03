import { FunctionComponent } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Login: FunctionComponent = function () {
    return (
        <Row className="mt-5">
            <Col lg="4" md="6" sm="12" className="mx-auto">
                <h4>Login</h4>
                <p>Login to see your stored your history</p>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default Login