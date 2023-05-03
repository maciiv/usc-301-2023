import { Alert, Card, Col, Row } from "react-bootstrap"
import { FunctionComponent, useState } from 'react'
import Explanation from "../components/Explanation"
import InputGroupInput, { IInput, Input } from "../components/InputGroupInput"
import InputGroupResult from "../components/InputGroupResult"
import { convertToMm, convertFromMmSquared } from "../helpers/utils"
import History, { IHistoryData, HistoryData } from "../components/History"
import CalculatorButtons from "../components/CalculatorButtons"

const TriangleCalculator: FunctionComponent = function () {
    const [base, setBase] = useState(new Input(0, ""))
    const [height, setHeight] = useState(new Input(0, ""))
    const [resulUnit, setResultUnit] = useState("")
    const [area, setArea] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState<undefined | number>(undefined)
    const [history, setHistory] = useState<IHistoryData>()

    const calculateArea = (b: number, h: number) => {
        const area = b * h * 0.5
        return parseInt(area.toFixed(2))
    }

    const calculate = () => {
        const baseMm = convertToMm(base.value, base.unit)
        const heightMm = convertToMm(height.value, height.unit)
        const areaMm = calculateArea(baseMm, heightMm)
        const areaResultUnit = convertFromMmSquared(areaMm, resulUnit)
        setArea(areaResultUnit)
        setHistory(new HistoryData([base, height], new Input(areaResultUnit, resulUnit)))     
    }

    const reset = () => {
        setArea(0)
        setSelectedIndex(0)
    }

    const getBase = (input: IInput) => {
        setBase(input)
        setSelectedIndex(undefined)
    }

    const getHeight = (input: IInput) => {
        setHeight(input)
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
                    <Card.Header><h3>Triangle</h3></Card.Header>
                    <Card.Body>
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
                        <div>
                            <InputGroupInput name="Base" selectedIndex={selectedIndex} getInput={getBase} />
                            <InputGroupInput name="Height" selectedIndex={selectedIndex} getInput={getHeight} />
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
                        <History type="triangle" historyRecord={history}  />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default TriangleCalculator