import { Alert, Card } from "react-bootstrap"
import { FunctionComponent } from 'react'
import Explanation from "./Explanation"
import InputGroupInput from "./InputGroupInput"
import InputGroupResult from "./InputGroupResult"

const SquareCalculator: FunctionComponent = function () {
    return (
        <div>
            <Card.Header><h3>Square</h3></Card.Header>
            <Explanation>
                <p>The area of a square is the product of the length of its sides</p>
                <Alert variant="info">
                    <span><strong>Formula: </strong></span><span>A = a * a</span>
                    <ul>
                        <li>a = side</li>
                    </ul>
                </Alert>
            </Explanation>
            <div className="calculator px-3">
                <InputGroupInput name="Side" />
                <InputGroupResult />
            </div>
        </div>
    )
}

export default SquareCalculator