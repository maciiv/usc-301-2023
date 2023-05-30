import { FunctionComponent, useEffect, useState } from "react";
import { Row } from "react-bootstrap";

const Logout: FunctionComponent = () => {
    const [loggedout, setLoggedout] = useState(false)

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/auth/logout", {
                method: "POST"
            })
            if (response.status === 200) setLoggedout(true)
        })()
    }, [])

    return (
        <Row className="mt-5">
            {loggedout ? "Successfully logout" : "Error logging out"}
        </Row>
    )
}

export default Logout