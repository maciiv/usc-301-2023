import { FunctionComponent } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from './components/NavigationBar'
import { Outlet } from "react-router-dom"
import { Container } from 'react-bootstrap'

const App: FunctionComponent = function () {

  return (
    <>
      <NavigationBar />
      <div className="App">
        <Container>
          <Outlet />
        </Container>        
      </div>
    </>
  )
}

export default App
