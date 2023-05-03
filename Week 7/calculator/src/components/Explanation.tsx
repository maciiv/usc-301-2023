import { PropsWithChildren } from "react"
import { FunctionComponent } from 'react'

type ExplanationProps = {}

const Explanation: FunctionComponent<PropsWithChildren<ExplanationProps>> = function (props: PropsWithChildren<ExplanationProps>) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Explanation