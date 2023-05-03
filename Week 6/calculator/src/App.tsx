import { FunctionComponent } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Calculator, { CalculatorType } from './components/Calculator'
import { Col, Container, Row } from 'react-bootstrap'

const App: FunctionComponent = function () {

  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg="12" className="my-5 d-flex">
            <h2 className="mx-auto">Calculator</h2>
          </Col>
          <Col lg="4" md="12" className="my-3">
            <Calculator type={CalculatorType.Square} />
          </Col>
          <Col lg="4" md="12" className="my-3">
            <Calculator type={CalculatorType.Triangle} />
          </Col>
          <Col lg="4" md="12" className="my-3">
            <Calculator type={CalculatorType.Trapezoid} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
