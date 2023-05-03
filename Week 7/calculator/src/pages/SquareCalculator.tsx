import { useState } from "react"
import { Alert, Card, Col, Row } from "react-bootstrap"
import { FunctionComponent } from 'react'
import Explanation from "../components/Explanation"
import InputGroupInput, { IInput, Input } from "../components/InputGroupInput"
import InputGroupResult from "../components/InputGroupResult"
import { convertFromMmSquared, convertToMm } from "../helpers/utils"
import History, { HistoryData, IHistoryData } from "../components/History"
import CalculatorButtons from "../components/CalculatorButtons"

const SquareCalculator: FunctionComponent = function () {
    const [input, setInput] = useState(new Input(0, ""))
    const [resulUnit, setResultUnit] = useState("")
    const [area, setArea] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState<undefined | number>(undefined)
    const [history, setHistory] = useState<IHistoryData>()

    const calculateArea = (a: number) => {
        const area = a * a
        return parseInt(area.toFixed(2))
    }

    const calculate = () => {
        const inputMm = convertToMm(input.value, input.unit)
        const areaMm = calculateArea(inputMm)
        const areaResultUnit = convertFromMmSquared(areaMm, resulUnit)
        setArea(areaResultUnit)
        setHistory(new HistoryData([input], new Input(areaResultUnit, resulUnit)))     
    }

    const reset = () => {
        setArea(0)
        setSelectedIndex(0)
    }

    const getInput = (input: IInput) => {
        setInput(input)
        setSelectedIndex(undefined)
    }

    const getResultUnit = (unit: string) => {
        setResultUnit(unit)
        setSelectedIndex(undefined)
    }

    return (
        <Row className="mt-5">
            <Col lg="6" md="6" sm="12">
                <Card className="h-100">
                    <Card.Header><h3>Square</h3></Card.Header>
                    <Card.Body>
                        <Explanation>
                            <p>The area of a square is the product of the length of its sides</p>
                            <Alert variant="info">
                                <span><strong>Formula: </strong></span><span>A = a * a</span>
                                <ul>
                                    <li>a = side</li>
                                </ul>
                            </Alert>
                        </Explanation>
                        <div>
                            <InputGroupInput name="Side" selectedIndex={selectedIndex} getInput={getInput} />
                            <InputGroupResult result={area} selectedIndex={selectedIndex} getUnit={getResultUnit} />
                        </div>
                        <CalculatorButtons calculate={calculate} reset={reset} />
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="6" md="6" sm="12">
                <Card className="h-100">
                    <Card.Header><h3>History</h3></Card.Header>
                    <Card.Body>
                        <History type="square" historyRecord={history}  />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default SquareCalculator