import { IInput } from "../components/InputGroupInput"

export function convertToMm(x: number, unit: string) {
    switch (unit) {
        case "cm":
            return x * 10
        case "m":
            return x * 1000
        default:
            return x
    }
}

export function convertFromMmSquared(x: number, unit: string) {
    switch (unit) {
        case "cm":
            return x / 100
        case "m":
            return x / 1000000
        default:
            return x
    }
}

export function createTableDataInput(inputs: IInput[]) {
    const td = document.createElement("td")
    const ul = document.createElement("ul")
    inputs.forEach(i => {
        const li = document.createElement("li")
        li.innerHTML = `${i.value} ${i.unit}`
        ul.appendChild(li)
    })
    td.appendChild(ul)
    return td
}

export function createTableDataResult(result: IInput) {
    const td = document.createElement("td")
    td.innerHTML = `${result.value} ${result.unit}`
    return td
}

export function createTableDataText(text: string) {
    const td = document.createElement("td")
    td.innerHTML = text
    return td
}