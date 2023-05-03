import { FunctionComponent } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../assets/react.svg"

const NavigationBar: FunctionComponent = function () {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/square">Square</Nav.Link>
                            <Nav.Link href="/triangle">Triangle</Nav.Link>
                            <Nav.Link href="/trapezoid">Trapezoid</Nav.Link>                           
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="/signin">Signin</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
      </>
    )
}

export default NavigationBar