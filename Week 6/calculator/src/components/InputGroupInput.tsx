import { FormControl, InputGroup } from "react-bootstrap"
import SelectInput from "./SelectInput"
import { FunctionComponent } from 'react'

interface InputGroupInputProps {
    name: string
}

const InputGroupInput: FunctionComponent<InputGroupInputProps> = function ({name}: InputGroupInputProps) {
    return (
        <InputGroup className="inputs">
            <InputGroup.Text className="input-group-text">Value: </InputGroup.Text>
            <FormControl placeholder={name} />
            <SelectInput />
        </InputGroup>
    )
}

export default InputGroupInput