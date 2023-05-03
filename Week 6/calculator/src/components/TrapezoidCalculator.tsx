import { Alert, Card } from "react-bootstrap"
import { FunctionComponent } from 'react'
import Explanation from "./Explanation"
import InputGroupInput from "./InputGroupInput"
import InputGroupResult from "./InputGroupResult"

const TrapezoidCalculator: FunctionComponent = function () {
    return (
        <div>
            <Card.Header><h3>Trapezoid</h3></Card.Header>
            <Explanation>
                <p>A trapezoid is a 4-sided geometrical shape with two sides parallel to each other</p>
                <Alert variant="info">
                    <span><strong>Formula: </strong></span><span>A = (a + b) * h * 0.5</span>
                    <ul>
                        <li>a = short base</li>
                        <li>b = long base</li>
                        <li>h = height</li>
                    </ul>
                </Alert>
            </Explanation>
            <div className="calculator px-3">
                <InputGroupInput name="Shorter base" />
                <InputGroupInput name="Longer base" />
                <InputGroupInput name="Height" />
                <InputGroupResult />
            </div>
        </div>
    )
}

export default TrapezoidCalculator