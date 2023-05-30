import { FunctionComponent } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from './components/NavigationBar'
import { Outlet } from "react-router-dom"
import { Container } from 'react-bootstrap'

export interface ILoggedUser {
  id: string,
  name: string
}

export const getLoggedUser = async (): Promise<ILoggedUser | null> => {
  try {
    const response = await fetch("/api/auth/user")
    const user = await response.json()
    return user
  } catch (e) {
    return null
  }
}

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
