import { Card } from "react-bootstrap"
import { FunctionComponent } from 'react'
import SquareCalculator from "../pages/SquareCalculator"
import TriangleCalculator from "../pages/TriangleCalculator"
import TrapezoidCalculator from "../pages/TrapezoidCalculator"

export enum CalculatorType {
    Square = "square",
    Triangle = "triangle",
    Trapezoid = "trapezoid"
}

interface CalculatorProps {
    type: CalculatorType
}

const Calculator: FunctionComponent<CalculatorProps> = function ({type}: CalculatorProps) {

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
    
    return (
        <Card className="h-100">
            {renderBody(type)}
        </Card>
    )
}

export default Calculator