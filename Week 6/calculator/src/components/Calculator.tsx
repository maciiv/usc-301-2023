import { Button, Card, Col, FormCheck, Row } from "react-bootstrap"
import { FunctionComponent } from 'react'
import SquareCalculator from "./SquareCalculator"
import History from "./History"
import TriangleCalculator from "./TriangleCalculator"
import TrapezoidCalculator from "./TrapezoidCalculator"

export enum CalculatorType {
    Square = "square",
    Triangle = "triangle",
    Trapezoid = "trapezoid"
}

interface CalculatorProps {
    type: CalculatorType
}

const renderBody = (type: CalculatorType) => {
    switch (type.toString()) {
        case "square":
            return <SquareCalculator />
        case "triangle":
            return <TriangleCalculator />
        case "trapezoid":
            return <TrapezoidCalculator />
        default:
            return ""
    }
}

const Calculator: FunctionComponent<CalculatorProps> = function ({type}: CalculatorProps) {
    return (
        <Card className="h-100">
            {renderBody(type)}
            <FormCheck type="switch" id={type.toString() + "-record-history"} label="Record history" className="mt-3 me-auto ms-3" />
            <Row className="mt-3">
                <Col lg="6" md="6" sm="12" className="d-flex">
                    <Button variant="primary" className="w-75 mx-auto calculate">Calculate</Button>
                </Col>
                <Col lg="6" md="6" sm="12" className="d-flex">
                    <Button variant="secondary" className="w-75 mx-auto calculate">Reset</Button>
                </Col>
                <History />
            </Row>
        </Card>
    )
}

export default Calculator