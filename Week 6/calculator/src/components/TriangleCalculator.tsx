import { Alert, Card } from "react-bootstrap"
import { FunctionComponent } from 'react'
import Explanation from "./Explanation"
import InputGroupInput from "./InputGroupInput"
import InputGroupResult from "./InputGroupResult"

const TriangleCalculator: FunctionComponent = function () {
    return (
        <div>
            <Card.Header><h3>Triangle</h3></Card.Header>
            <Explanation>
                <p>A triangle is one of the most basic shapes in geometry</p>
                <Alert variant="info">
                    <span><strong>Formula: </strong></span><span>A = b * h * 0.5</span>
                    <ul>
                        <li>b = base</li>
                        <li>h = height</li>
                    </ul>
                </Alert>
            </Explanation>
            <div className="calculator px-3">
                <InputGroupInput name="Base" />
                <InputGroupInput name="Height" />
                <InputGroupResult />
            </div>
        </div>
    )
}

export default TriangleCalculator