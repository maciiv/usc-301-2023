import { FormControl, InputGroup } from "react-bootstrap"
import SelectInput from "./SelectInput"
import { FunctionComponent } from 'react'

const InputGroupResult: FunctionComponent = function () {
    return (
        <InputGroup className="mt-5 pt-3 border-top result">
            <InputGroup.Text>Result: </InputGroup.Text>
            <FormControl disabled />
            <SelectInput />
        </InputGroup>
    )
}

export default InputGroupResult