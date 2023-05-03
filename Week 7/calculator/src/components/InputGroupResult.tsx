import { FormControl, InputGroup } from "react-bootstrap"
import SelectInput from "./SelectInput"
import { FunctionComponent, useState } from 'react'

interface InputGroupResultProps {
    getUnit: Function
    result: number
    selectedIndex?: number
}

const InputGroupResult: FunctionComponent<InputGroupResultProps> = function ({getUnit, result, selectedIndex}: InputGroupResultProps) {
    const [unit, setUnit] = useState("")

    const getResultUnit = (unit: string) => {
        setUnit(unit)
        getUnit(unit)
    }

    return (
        <InputGroup className="mt-5 pt-3 border-top result">
            <InputGroup.Text>Result: </InputGroup.Text>
            <FormControl value={result} disabled />
            <SelectInput selectedIndex={selectedIndex} getUnit={getResultUnit} />
        </InputGroup>
    )
}

export default InputGroupResult