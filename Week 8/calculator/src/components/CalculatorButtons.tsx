import { FunctionComponent } from "react";
import { Row, Col, Button } from "react-bootstrap";

interface CalculatorButtonsProps {
    calculate: Function
    reset: Function
}

const CalculatorButtons: FunctionComponent<CalculatorButtonsProps> = function ({calculate, reset}: CalculatorButtonsProps) {
    return (
        <Row className="mt-3">
            <Col lg="6" md="6" sm="12" className="d-flex">
                <Button variant="primary" className="w-100 mx-auto calculate" onClick={() => calculate()}>Calculate</Button>
            </Col>
            <Col lg="6" md="6" sm="12" className="d-flex">
                <Button variant="secondary" className="w-100 mx-auto calculate" onClick={() => reset()}>Reset</Button>
            </Col>
        </Row>
    )
}

export default CalculatorButtons