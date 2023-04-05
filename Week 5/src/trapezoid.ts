import { Calculator } from "./calculator.js"

export class TrapezoidCalculator extends Calculator {
    constructor(id: string) {
        super(id)
    }
    calculate() {
        const inputUnits = this.getInputsUnits()
        const areaMM = parseInt(this.calculateArea(inputUnits.inputsMm[0], inputUnits.inputsMm[1], inputUnits.inputsMm[2]).toFixed(2))
        const result = this.displayResults(areaMM)
        this.recordHistory(inputUnits.inputs, result)
    }
    calculateArea(a: number, b: number, h: number) {
        return (a + b) * h * 0.5
    }
}