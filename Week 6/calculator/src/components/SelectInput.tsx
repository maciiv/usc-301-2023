import { FormSelect } from "react-bootstrap"
import { FunctionComponent } from 'react'

const SelectInput: FunctionComponent = function () {
    return (
        <FormSelect defaultValue={0}>
            <option>Select a unit</option>
            <option value="mm">mm</option>
            <option value="cm">cm</option>
            <option value="m">m</option>
        </FormSelect>
    )
}

export default SelectInput