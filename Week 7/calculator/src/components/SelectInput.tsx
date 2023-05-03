import { FormSelect } from "react-bootstrap"
import { FunctionComponent, useEffect, useState } from 'react'

interface SelectInputProps {
    getUnit: Function,
    selectedIndex?: number
}

const SelectInput: FunctionComponent<SelectInputProps> = function ({getUnit, selectedIndex} : SelectInputProps) {
    const [unit, setUnit] = useState("")

    useEffect(() => {
        if (selectedIndex !== undefined) {
            setUnit("")
        }
    }, [selectedIndex])

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUnit(e.target.value)
        getUnit(e.target.value)
    }

    return (
        <FormSelect value={unit} onChange={(e) => handleOnChange(e)}>
            <option value="">Select a unit</option>
            <option value="mm">mm</option>
            <option value="cm">cm</option>
            <option value="m">m</option>
        </FormSelect>
    )
}

export default SelectInput