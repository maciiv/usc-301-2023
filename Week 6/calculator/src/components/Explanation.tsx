import { PropsWithChildren } from "react"
import { Card } from "react-bootstrap"
import { FunctionComponent } from 'react'

type ExplanationProps = {}

const Explanation: FunctionComponent<PropsWithChildren<ExplanationProps>> = function (props: PropsWithChildren<ExplanationProps>) {
    return (
        <Card.Body className="explanation">
            {props.children}
        </Card.Body>
    )
}

export default Explanation