import { convertFromMmSquared, convertToMm, createTableDataInput, createTableDataResult } from "./utils.js"

interface IInputHtml {
    value: HTMLInputElement
    unit: HTMLSelectElement
}

class InputHtml implements IInputHtml {
    value: HTMLInputElement
    unit: HTMLSelectElement
    constructor(value: HTMLInputElement, unit: HTMLSelectElement) {
        this.value = value
        this.unit = unit
    }
}

export interface IInput {
    value: number
    unit: string
}

export class Input implements IInput {
    value: number
    unit: string
    constructor(value: number, unit: string) {
        this.value = value
        this.unit = unit
    }
}

interface IHistory {
    inputs: IInput[]
    result: IInput
}

class History implements IHistory {
    inputs: IInput[]
    result: IInput
    constructor(inputs: IInput[], result: IInput) {
        this.inputs = inputs
        this.result = result
    }
}

interface IInputUnits {
    inputs: IInput[]
    inputsHtml: IInputHtml[]
    inputsMm: number[]
}

class InputUnits implements IInputUnits {
    inputs: IInput[]
    inputsHtml: IInputHtml[]
    inputsMm: number[]
    constructor(inputs: IInput[], inputsHtml: IInputHtml[], inputsMm: number[]) {
        this.inputs = inputs
        this.inputsHtml = inputsHtml
        this.inputsMm = inputsMm
    }
}

interface ICalculator {
    calculator: HTMLDivElement | null
    calculateButton: HTMLButtonElement | null
    resetButton: HTMLButtonElement | null
    historyButton: HTMLAnchorElement | null
    clearHistoryButton: HTMLButtonElement | null
    historyTable: HTMLDivElement | null
    history: IHistory[]
    getInputsUnits(): IInputUnits
    displayResults(resultMm: number): IInput
    clearResults(): void
    resetCalculator(): void
    recordHistory(inputs: IInput[], result: IInput): void
    clearHistory(): void
}

export class Calculator implements ICalculator {
    calculator: HTMLDivElement | null
    calculateButton: HTMLButtonElement | null
    resetButton: HTMLButtonElement | null
    historyButton: HTMLAnchorElement | null
    clearHistoryButton: HTMLButtonElement | null
    historyTable: HTMLDivElement | null
    history: IHistory[] = []
    constructor(id: string) {
        this.calculator = document.querySelector(`#${id}`)
        this.calculateButton = document.querySelector(`#${id} .calculator .calculate`)
        this.resetButton = document.querySelector(`#${id} .calculator .reset`)
        this.historyButton = document.querySelector(`#${id} .show-history`)
        this.clearHistoryButton = document.querySelector(`#${id} .clear-history`)
        this.historyTable = document.querySelector(`#${id} .history`)
    }
    getInputsUnits(): IInputUnits {
        if (this.calculator === null)
            return new InputUnits([], [], [])
        const inputs = this.calculator.querySelectorAll<HTMLInputElement>(".inputs input")
        const units = this.calculator.querySelectorAll<HTMLSelectElement>(".inputs select")
        const inputUnitsHtml: IInputHtml[] = []
        const inputUnits: IInput[] = []
        inputs.forEach((d, i) => {
            inputUnits.push(new Input(parseInt(d.value), units[i].value))
            inputUnitsHtml.push(new InputHtml(d, units[i]))
        })
        return new InputUnits(inputUnits, inputUnitsHtml, Array.from(inputUnits, c => convertToMm(c.value, c.unit)))
    }
    displayResults(resultMm: number): IInput {
        if (this.calculator === null)
            return new Input(0, "")
        const resultHtml = this.calculator.querySelector(".calculator .result")
        const resultUnit = resultHtml?.querySelector("select")
        const unit = resultUnit !== undefined && resultUnit !== null ? resultUnit.value : "mm"
        const result = convertFromMmSquared(resultMm, unit)
        const resultInput = resultHtml?.querySelector("input")
        if (resultInput !== undefined && resultInput !== null)
            resultInput.value = result.toString()
        return new Input(result, unit)
    }
    clearResults(): void {
        if (this.calculator === null)
            return
        const resultHtml = this.calculator.querySelector(".calculator .result")
        const resultUnit = resultHtml?.querySelector("select")
        const resultInput = resultHtml?.querySelector("input")
        if (resultInput !== undefined && resultInput !== null)
            resultInput.value = ""
        if (resultUnit !== undefined && resultUnit !== null)
            resultUnit.selectedIndex = 0
    }
    resetCalculator(): void {
        const inputUnits = this.getInputsUnits()
        inputUnits.inputsHtml.forEach(c => {
            c.value.value = ""
            c.unit.selectedIndex = 0
        })
    }
    recordHistory(inputs: IInput[], result: IInput): void {
        if (this.calculator === null)
            return
        const recordHistory = this.calculator.querySelector<HTMLInputElement>(".record-history")
        if (recordHistory === null)
            return
        if (recordHistory.checked) {
            const newRecord = new History(inputs, result)
            this.history.push(newRecord)
            generateHistoryHtml.bind(this)(newRecord)
        }

        function generateHistoryHtml(this: Calculator, newRecord: IHistory) {
            if (this.historyTable === null)
                return
            const tBody = this.historyTable.querySelector(".history tbody")
            if (tBody === null)
                return
            const tr = document.createElement("tr")
            const inputs = createTableDataInput(newRecord.inputs)
            const result = createTableDataResult(newRecord.result)
            tr.appendChild(inputs)
            tr.appendChild(result)
            tBody.appendChild(tr)
        }
    }
    clearHistory(): void {
        this.history = []
        if (this.historyTable === null)
            return
        const tBody = this.historyTable.querySelector(".history tbody")
        this.resetCalculator()
        if (tBody === null)
            return
        tBody.innerHTML = ""
    }
}