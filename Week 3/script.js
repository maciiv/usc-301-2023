class Calculator {
    history = []
    constructor(id) {
        this.calculator = document.querySelector(`#${id}`)
        this.calculateButton = document.querySelector(`#${id} .calculator .calculate`)
        this.resetButton = document.querySelector(`#${id} .calculator .reset`)
        this.historyButton = document.querySelector(`#${id} .show-history`)
        this.clearHistoryButton = document.querySelector(`#${id} .clear-history`)
        this.historyTable = document.querySelector(`#${id} .history`)
    }
    getInputsUnits() {
        const inputs = this.calculator.querySelectorAll(".inputs input")
        const units = this.calculator.querySelectorAll(".inputs select")
        const inputUnits = []
        inputs.forEach((d, i) => {
            inputUnits.push({
                "value": d,
                "unit": units[i]
            })
        })
        return { "inputs": inputUnits, "inputsMm": Array.from(inputs, (c, i) => convertToMm(parseInt(c.value), units[i].value)) }
    }
    displayResults(resultMm) {
        const resultHtml = this.calculator.querySelector(".calculator .result")
        const resultUnit = resultHtml.querySelector("select")
        const result = convertFromMmSquared(resultMm, resultUnit.value)
        resultHtml.querySelector("input").value = result
        return { "value": result, "unit": resultUnit.value }
    }
    clearResults() {
        const resultHtml = this.calculator.querySelector(".calculator .result")
        const resultUnit = resultHtml.querySelector("select")
        resultHtml.querySelector("input").value = null
        resultUnit.selectedIndex = 0
    }
    resetCalculator() {
        const inputUnits = this.getInputsUnits(this.calculator)
        inputUnits.inputs.forEach(c => {
            c.value.value = null
            c.unit.selectedIndex = 0
        })
    }
    recordHistory(inputs, result) {
        const recordHistory = this.calculator.querySelector(".record-history")
        if (recordHistory.checked) {
            const newRecord = { "inputs": inputs, "result": result }
            this.history.push(newRecord)
            generateHistoryHtml.bind(this)(newRecord)
        }

        function generateHistoryHtml(newRecord) {
            const historyTBody = this.historyTable.querySelector(".history tbody")
            const tr = document.createElement("tr")
            const tdInputs = document.createElement("td")
            const ul = document.createElement("ul")
            newRecord.inputs.forEach(i => {
                const li = document.createElement("li")
                li.innerHTML = `${i.value.value} ${i.unit.value}`
                ul.appendChild(li)
            })
            const tdResults = document.createElement("td")
            tdResults.innerHTML = `${newRecord.result.value} ${newRecord.result.unit}`
            tdInputs.appendChild(ul)
            tr.appendChild(tdInputs)
            tr.appendChild(tdResults)
            historyTBody.appendChild(tr)
        }
    }
    clearHistory() {
        this.history = []
        const historyTBody = this.historyTable.querySelector(".history tbody")
        historyTBody.innerHTML = null
        this.resetCalculator()
    }
}

class SquareCalculator extends Calculator {
    constructor(id) {
        super(id)
    }
    calculate() {
        const inputUnits = this.getInputsUnits()
        const areaMM = this.calculateArea(inputUnits.inputsMm[0]).toFixed(2)
        const result = this.displayResults(areaMM)
        this.recordHistory(inputUnits.inputs, result)
    }
    calculateArea(a) {
        return a * a
    }
}

class TriangleCalculator extends Calculator {
    constructor(id) {
        super(id)
    }
    calculate() {
        const inputUnits = this.getInputsUnits()
        const areaMM = this.calculateArea(inputUnits.inputsMm[0], inputUnits.inputsMm[1]).toFixed(2)
        const result = this.displayResults(areaMM)
        this.recordHistory(inputUnits.inputs, result)
    }
    calculateArea(b, h) {
        return b * h * 0.5
    }
}

class TrapezoidCalculator extends Calculator {
    constructor(id) {
        super(id)
    }
    calculate() {
        const inputUnits = this.getInputsUnits()
        const areaMM = this.calculateArea(inputUnits.inputsMm[0], inputUnits.inputsMm[1], inputUnits.inputsMm[2]).toFixed(2)
        const result = this.displayResults(areaMM)
        this.recordHistory(inputUnits.inputs, result)
    }
    calculateArea(a, b, h) {
        return (a + b) * h * 0.5
    }
}

class Result {
    constructor(value, unit) {
        this.value = value
        this.unit = unit
    }
}

function convertToMm(x, unit) {
    switch (unit) {
        case "cm":
            return x * 10
        case "m":
            return x * 1000
        default:
            return x
    }
}

function convertFromMmSquared(x, unit) {
    switch (unit) {
        case "cm":
            return x / 100
        case "m":
            return x / 1000000
        default:
            return x
    }
}

const squareCalculator = new SquareCalculator("square")
squareCalculator.calculateButton.addEventListener("click", () => {
    squareCalculator.calculate()
})
squareCalculator.resetButton.addEventListener("click", () => {
    squareCalculator.resetCalculator()
    squareCalculator.clearResults()
})
squareCalculator.historyButton.addEventListener("click", function () {
    squareCalculator.historyTable.classList.toggle("show")
    const isShow = squareCalculator.historyTable.classList.contains("show")
    this.innerHTML = isShow ? "Hide history" : "Show history"
})
squareCalculator.clearHistoryButton.addEventListener("click", () => {
    squareCalculator.clearHistory()
    squareCalculator.clearResults()
})

const triangleCalculator = new TriangleCalculator("triangle")
triangleCalculator.calculateButton.addEventListener("click", () => {
    triangleCalculator.calculate()
})
triangleCalculator.resetButton.addEventListener("click", () => {
    triangleCalculator.resetCalculator()
    triangleCalculator.clearResults()
})
triangleCalculator.historyButton.addEventListener("click", function () {
    triangleCalculator.historyTable.classList.toggle("show")
    const isShow = triangleCalculator.historyTable.classList.contains("show")
    this.innerHTML = isShow ? "Hide history" : "Show history"
})
triangleCalculator.clearHistoryButton.addEventListener("click", () => {
    triangleCalculator.clearHistory()
    triangleCalculator.clearResults()
})

const trapezoidCalculator = new TrapezoidCalculator("trapezoid")
trapezoidCalculator.calculateButton.addEventListener("click", () => {
    trapezoidCalculator.calculate()
})
trapezoidCalculator.resetButton.addEventListener("click", () => {
    trapezoidCalculator.resetCalculator()
    trapezoidCalculator.clearResults()
})
trapezoidCalculator.historyButton.addEventListener("click", function () {
    trapezoidCalculator.historyTable.classList.toggle("show")
    const isShow = triangleCalculator.historyTable.classList.contains("show")
    this.innerHTML = isShow ? "Hide history" : "Show history"
})
trapezoidCalculator.clearHistoryButton.addEventListener("click", () => {
    trapezoidCalculator.clearHistory()
    trapezoidCalculator.clearResults()
})