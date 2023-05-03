import { FunctionComponent } from "react";
import { Col, Form, Row } from "react-bootstrap";

const Signin: FunctionComponent = function () {
    return (
        <Row className="mt-5">
            <Col lg="4" md="6" sm="12" className="mx-auto">
                <h4>Signin</h4>
                <p>Signin will allow you to store your history</p>
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default Signin