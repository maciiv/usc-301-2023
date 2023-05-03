import { Button, Card } from "react-bootstrap"
import { FunctionComponent } from 'react'

const History: FunctionComponent = function () {
    return (
        <div>
            <div className="d-flex">
                <Button variant="warning" className="w-75 mx-auto mt-5 mb-3 show-history">Show history</Button>
            </div>
            <div className="collapse history">
                <Card>
                    <Card.Body>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Inputs</th>
                                    <th>Results</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </Card.Body>
                </Card>
            </div>
            <div className="d-flex">
                <Button variant="danger" className="w-75 mx-auto my-3 clear-history">Clear history</Button>
            </div>
            
        </div>
    )
}

export default History