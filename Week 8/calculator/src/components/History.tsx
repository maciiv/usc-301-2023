import { Button, FormCheck, Row } from "react-bootstrap"
import { FunctionComponent, useEffect, useRef, useState } from 'react'
import { IInput } from "./InputGroupInput"
import HistoryTable from "./HistoryTable"

export interface IHistoryData {
    inputs: IInput[]
    result: IInput
}

export class HistoryData implements IHistoryData {
    inputs: IInput[]
    result: IInput
    constructor(inputs: IInput[], result: IInput) {
        this.inputs = inputs
        this.result = result
    }
}

interface HistoryProps {
    type: string
    historyRecord?: IHistoryData
}

const History: FunctionComponent<HistoryProps> = function ({type, historyRecord}: HistoryProps) {
    const [history, setHistory] = useState<IHistoryData[]>([])
    const [recordHistory, setRecordHistory] = useState(false)
    const [showHistory, setShowHistory] = useState(false)

    useEffect(() => {
        if (historyRecord !== undefined && recordHistory) {
            setHistory(h => [...h, historyRecord])
        }
    }, [historyRecord])

    const clearHistory = () => {
        setHistory([])
        setShowHistory(false)
    }

    return (
        <Row className="mt-3">
            <FormCheck type="switch" id={type + "-switch"} onChange={(e) => setRecordHistory(e.target.checked)} label="Record history" className="mt-3 me-auto ms-3" />
            <div className="d-flex">
                <Button variant="warning" className="w-75 mx-auto mt-5 mb-3 show-history" onClick={() => setShowHistory(!showHistory)}>Show history</Button>
            </div>
            {showHistory ? <HistoryTable history={history} /> : null}
            <div className="d-flex">
                <Button variant="danger" className="w-75 mx-auto my-3 clear-history" onClick={clearHistory}>Clear history</Button>
            </div>
            
        </Row>
    )
}

export default History