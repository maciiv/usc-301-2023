import { FunctionComponent } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../assets/react.svg"
import { useRouteLoaderData } from "react-router-dom";
import { ILoggedUser } from "../App";

const NavigationBar: FunctionComponent = function () {
    const loggedUser = useRouteLoaderData("root") as ILoggedUser | null

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
                            {loggedUser === null || loggedUser === undefined ? <>
                                    <Nav.Link href="/signin">Signin</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                </> : 
                                <>
                                    <span className="text-light my-auto">Welcome {loggedUser.name}</span>
                                    <Nav.Link href="/logout" className="ms-2">Logout</Nav.Link>
                                </>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
      </>
    )
}

export default NavigationBar