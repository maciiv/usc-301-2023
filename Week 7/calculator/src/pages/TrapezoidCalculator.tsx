import { Alert, Card, Col, Row } from "react-bootstrap"
import { FunctionComponent, useState } from 'react'
import Explanation from "../components/Explanation"
import InputGroupInput, { IInput, Input } from "../components/InputGroupInput"
import InputGroupResult from "../components/InputGroupResult"
import { convertToMm, convertFromMmSquared } from "../helpers/utils"
import CalculatorButtons from "../components/CalculatorButtons"
import History, { IHistoryData, HistoryData } from "../components/History"

const TrapezoidCalculator: FunctionComponent = function () {
    const [sBase, setSBase] = useState(new Input(0, ""))
    const [lBase, setLBase] = useState(new Input(0, ""))
    const [height, setHeight] = useState(new Input(0, ""))
    const [resulUnit, setResultUnit] = useState("")
    const [area, setArea] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState<undefined | number>(undefined)
    const [history, setHistory] = useState<IHistoryData>()

    const calculateArea = (a :number, b: number, h: number) => {
        const area = (a + b) * h * 0.5
        return parseInt(area.toFixed(2))
    }

    const calculate = () => {
        const sBaseMm = convertToMm(sBase.value, sBase.unit)
        const lBaseMm = convertToMm(lBase.value, lBase.unit)
        const heightMm = convertToMm(height.value, height.unit)
        const areaMm = calculateArea(sBaseMm, lBaseMm, heightMm)
        const areaResultUnit = convertFromMmSquared(areaMm, resulUnit)
        setArea(areaResultUnit)
        setHistory(new HistoryData([sBase, lBase, height], new Input(areaResultUnit, resulUnit)))     
    }

    const reset = () => {
        setArea(0)
        setSelectedIndex(0)
    }

    const getSBase = (input: IInput) => {
        setSBase(input)
        setSelectedIndex(undefined)
    }

    const getLBase = (input: IInput) => {
        setLBase(input)
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
                    <Card.Header><h3>Trapezoid</h3></Card.Header>
                    <Card.Body>
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
                        <div>
                            <InputGroupInput name="Shorter base" selectedIndex={selectedIndex} getInput={getSBase} />
                            <InputGroupInput name="Longer base" selectedIndex={selectedIndex} getInput={getLBase} />
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
        </Row>    )
}

export default TrapezoidCalculator