import { Calculator } from "./calculator.js"

export class SquareCalculator extends Calculator {
    constructor(id: string) {
        super(id)
    }
    calculate() {
        const inputUnits = this.getInputsUnits()
        const areaMM = parseInt(this.calculateArea(inputUnits.inputsMm[0]).toFixed(2))
        const result = this.displayResults(areaMM)
        this.recordHistory(inputUnits.inputs, result)
    }
    calculateArea(a: number) {
        return a * a
    }
}