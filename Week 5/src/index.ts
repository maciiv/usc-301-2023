import { Import } from "./import.js"
import { SquareCalculator } from "./square.js"
import { TrapezoidCalculator } from "./trapezoid.js"
import { TriangleCalculator } from "./triangle.js"

const squareCalculator = new SquareCalculator("square")
squareCalculator.calculateButton?.addEventListener("click", () => {
    squareCalculator.calculate()
})
squareCalculator.resetButton?.addEventListener("click", () => {
    squareCalculator.resetCalculator()
    squareCalculator.clearResults()
})
squareCalculator.historyButton?.addEventListener("click", function () {
    squareCalculator.historyTable?.classList.toggle("show")
    const isShow = squareCalculator.historyTable?.classList.contains("show")
    this.innerHTML = isShow ? "Hide history" : "Show history"
})
squareCalculator.clearHistoryButton?.addEventListener("click", () => {
    squareCalculator.clearHistory()
    squareCalculator.clearResults()
})

const triangleCalculator = new TriangleCalculator("triangle")
triangleCalculator.calculateButton?.addEventListener("click", () => {
    triangleCalculator.calculate()
})
triangleCalculator.resetButton?.addEventListener("click", () => {
    triangleCalculator.resetCalculator()
    triangleCalculator.clearResults()
})
triangleCalculator.historyButton?.addEventListener("click", function () {
    triangleCalculator.historyTable?.classList.toggle("show")
    const isShow = triangleCalculator.historyTable?.classList.contains("show")
    this.innerHTML = isShow ? "Hide history" : "Show history"
})
triangleCalculator.clearHistoryButton?.addEventListener("click", () => {
    triangleCalculator.clearHistory()
    triangleCalculator.clearResults()
})

const trapezoidCalculator = new TrapezoidCalculator("trapezoid")
trapezoidCalculator.calculateButton?.addEventListener("click", () => {
    trapezoidCalculator.calculate()
})
trapezoidCalculator.resetButton?.addEventListener("click", () => {
    trapezoidCalculator.resetCalculator()
    trapezoidCalculator.clearResults()
})
trapezoidCalculator.historyButton?.addEventListener("click", function () {
    trapezoidCalculator.historyTable?.classList.toggle("show")
    const isShow = triangleCalculator.historyTable?.classList.contains("show")
    this.innerHTML = isShow ? "Hide history" : "Show history"
})
trapezoidCalculator.clearHistoryButton?.addEventListener("click", () => {
    trapezoidCalculator.clearHistory()
    trapezoidCalculator.clearResults()
})

const dataImporter = new Import()
const importDataButton = document.querySelector(".import-data")
importDataButton?.addEventListener("click", function () {
    dataImporter.import(importData)
    document.querySelector("#import-data-table")?.classList.toggle("show")
})

const importData = [
    {
        "inputs": [
            { "value": 2 , "unit": "mm" }
        ],
        "outputUnit": "mm",
        "figure": "square"
    },
    {
        "inputs": [
            { "value": 2 , "unit": "mm" },
            { "value": 3 , "unit": "mm" }
        ],
        "outputUnit": "mm",
        "figure": "triangle"
    }
]