var squareHistory = []
var triangleHistory = []
var trapezoidHistory = []

function squareCalculator() {
    function calculateArea(a) {
        return a * a
    }
    const calc = document.querySelector("#square")
    const inputUnits = getInputsUnits(calc)
    const areaMm = calculateArea(inputUnits.inputsMm[0]).toFixed(2)
    const result = displayResults(calc, areaMm) 
    recordHistory(calc, squareHistory, inputUnits.inputs, inputUnits.units, result)
}

function triangleCalculator() {
    function calculateArea(b, h) {
        return b * h * 0.5
    }
    const calc = document.querySelector("#triangle")
    const inputUnits = getInputsUnits(calc)
    const areaMm = calculateArea(inputUnits.inputsMm[0], inputUnits.inputsMm[1]).toFixed(2)
    const result = displayResults(calc, areaMm) 
    recordHistory(calc, triangleHistory, inputUnits.inputs, inputUnits.units, result)
}

function trapezoidCalculator() {
    function calculateArea(a, b, h) {
        return (a + b) * h * 0.5
    }
    const calc = document.querySelector("#trapezoid")
    const inputUnits = getInputsUnits(calc)
    const areaMm = calculateArea(inputUnits.inputsMm[0], inputUnits.inputsMm[1], inputUnits.inputsMm[2]).toFixed(2)
    const result = displayResults(calc, areaMm) 
    recordHistory(calc, trapezoidHistory, inputUnits.inputs, inputUnits.units, result)
}

function getInputsUnits(calculator) {
    const inputs = calculator.querySelectorAll(".inputs input")
    const units = calculator.querySelectorAll(".inputs select")
    return { "inputs": inputs, "units": units, "inputsMm": Array.from(inputs, (c, i) => convertToMm(parseInt(c.value), units[i].value)) }
}

function recordHistory(calculator, history, inputs, units, result) {
    const recordHistory = calculator.querySelector(".record-history")
    if (recordHistory.checked) {
        const newRecord = { "inputs": Array.from(inputs, (c, i) => { return { "value": c.value, "unit": units[i].value } }), "result": result }
        history.push(newRecord)
        generateHistoryHtml(calculator, newRecord)
    }
}

function clearHistory(calculator, history) {
    history = []
    const historyTBody = calculator.querySelector(".history tbody")
    historyTBody.innerHTML = null
    resetCalculator(calculator)
}

function resetCalculator(calculator) {
    const inputUnits = getInputsUnits(calculator)
    inputUnits.inputs.forEach(i => i.value = null)
    inputUnits.units.forEach(u => u.selectedIndex = 0)
}

function generateHistoryHtml(calculator, newRecord) {
    const historyTBody = calculator.querySelector(".history tbody")
    const tr = document.createElement("tr")
    const tdInputs = document.createElement("td")
    const ul = document.createElement("ul")
    newRecord.inputs.forEach(i => {
        const li = document.createElement("li")
        li.innerHTML = `${i.value} ${i.unit}`
        ul.appendChild(li)
    })
    const tdResults = document.createElement("td")
    tdResults.innerHTML = `${newRecord.result.value} ${newRecord.result.unit}`
    tdInputs.appendChild(ul)
    tr.appendChild(tdInputs)
    tr.appendChild(tdResults)
    historyTBody.appendChild(tr)
}

function displayResults(calculator, resultMm) {
    const resultHtml = calculator.querySelector(".calculator .result")
    const resultUnit = resultHtml.querySelector("select")
    const result = convertFromMmSquared(resultMm, resultUnit.value)
    resultHtml.querySelector("input").value = result
    return { "value": result, "unit": resultUnit.value }
}

function clearResults(calculator) {
    const resultHtml = calculator.querySelector(".calculator .result")
    const resultUnit = resultHtml.querySelector("select")
    resultHtml.querySelector("input").value = null
    resultUnit.selectedIndex = 0
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

const squareCalculate = document.querySelector("#square .calculator .calculate")
squareCalculate.addEventListener("click", () => {
    squareCalculator()
})
const squareReset = document.querySelector("#square .calculator .reset")
squareReset.addEventListener("click", () => {
    const calculator = document.querySelector("#square")
    resetCalculator(calculator)
    clearResults(calculator)
})
const squareHistoryButton = document.querySelector("#square .show-history") 
squareHistoryButton.addEventListener("click", function () {
    const historyTable = document.querySelector("#square .history")
    historyTable.classList.toggle("show")
    const isShow = historyTable.classList.contains("show")
    this.innerHTML = isShow ? "Hide history" : "Show history"
})
const squareClearHistory = document.querySelector("#square .clear-history")
squareClearHistory.addEventListener("click", () => {
    const calculator = document.querySelector("#square")
    clearHistory(calculator, squareHistory)
    clearResults(calculator)
})

const triangleCalculate = document.querySelector("#triangle .calculator .calculate")
triangleCalculate.addEventListener("click", () => {
    triangleCalculator()
})
const triangleReset = document.querySelector("#triangle .calculator .reset")
triangleReset.addEventListener("click", () => {
    const calculator = document.querySelector("#triangle")
    resetCalculator(calculator)
    clearResults(calculator)
})
const triangleHistoryButton = document.querySelector("#triangle .show-history") 
triangleHistoryButton.addEventListener("click", function () {
    const historyTable = document.querySelector("#triangle .history")
    historyTable.classList.toggle("show")
    const isShow = historyTable.classList.contains("show")
    this.innerHTML = isShow ? "Hide history" : "Show history"
})
const triangleClearHistory = document.querySelector("#triangle .clear-history")
triangleClearHistory.addEventListener("click", () => {
    const calculator = document.querySelector("#triangle")
    clearHistory(calculator, squareHistory)
    clearResults(calculator)
})

const trapezoidCalculate = document.querySelector("#trapezoid .calculator .calculate")
trapezoidCalculate.addEventListener("click", () => {
    trapezoidCalculator()
})