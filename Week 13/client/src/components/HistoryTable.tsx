import { FunctionComponent } from "react";
import { IHistoryData } from "./History";
import { Col } from "react-bootstrap";

interface HistoryTableProps {
    history: IHistoryData[]
}

const HistoryTable: FunctionComponent<HistoryTableProps> = function ({history}: HistoryTableProps) {
    return (
        <Col lg="12" md="12" className="mx-3">
            <table className="table">
                <thead>
                    <tr>
                        <th>Inputs</th>
                        <th>Results</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((h, a) => {
                        return (
                            <tr key={a}>
                                <td>
                                    <ul>
                                        {h.inputs.map((i, b) => {
                                            return (
                                                <li key={b}>{i.value} {i.unit}</li>
                                            )
                                        })}
                                    </ul>
                                </td>
                                <td>
                                    {h.result.value} {h.result.unit}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Col>
       
    )
}

export default HistoryTable