import { useEffect, useState } from "react"
import { FormControl, InputGroup } from "react-bootstrap"
import SelectInput from "./SelectInput"
import { FunctionComponent } from 'react'

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

interface InputGroupInputProps {
    name: string,
    getInput: Function,
    selectedIndex?: number
}

const InputGroupInput: FunctionComponent<InputGroupInputProps> = function ({name, getInput, selectedIndex}: InputGroupInputProps) {
    const [value, setValue] = useState<number | string>("")
    const [unit, setUnit] = useState("")

    useEffect(() => {
        if (selectedIndex !== undefined) {
            setValue("")
        }
    }, [selectedIndex])

    const getUnit = (unit: string) => {
        setUnit(unit)
        if (typeof(value) === "number") {
            getInput(new Input(value, unit))
        }
    }

    const getInputUnit = (targetValue: string) => {
        const value = targetValue !== "" ? parseInt(targetValue) : 0
        setValue(value)
        getInput(new Input(value, unit))
    }

    return (
        <InputGroup className="inputs">
            <InputGroup.Text className="input-group-text">Value: </InputGroup.Text>
            <FormControl type="number" value={value} placeholder={name} onChange={(e) => getInputUnit(e.target.value)} />
            <SelectInput selectedIndex={selectedIndex} getUnit={getUnit} />
        </InputGroup>
    )
}

export default InputGroupInput