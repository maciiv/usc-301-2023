import { IInput, Input } from "./calculator.js"
import { createTableDataText, createTableDataInput, createTableDataResult, convertToMm, convertFromMmSquared } from "./utils.js"

interface IImportData {
    figure: string
    inputs: IInput[]
    outputUnit: string
}

export class Import {
    import(data: IImportData[]) {
        const tBody = document.querySelector("#import-data-table tbody")
        if (tBody === null)
            return
        tBody.innerHTML = ""
        data.forEach(d => {
            const calculation = this.calculate(d)
            const tr = document.createElement("tr")
            const figure = createTableDataText(d.figure)
            const inputs = createTableDataInput(d.inputs)
            const result = createTableDataResult(calculation)
            tr.appendChild(figure)
            tr.appendChild(inputs)
            tr.appendChild(result)
            tBody.appendChild(tr)
        })
    }
    calculate(record: IImportData) {
        const inputsMm = record.inputs.map(d => convertToMm(d.value, d.unit))
        let result = 0
        switch (record.figure) {
            case "square":
                result = inputsMm[0] * inputsMm[0]
                break
            case "triangle":
                result = inputsMm[0] * inputsMm[1] * 0.5
                break
        }
        const resultOU = convertFromMmSquared(parseInt(result.toFixed(2)), record.outputUnit)
        return new Input(resultOU, record.outputUnit)
    }
}