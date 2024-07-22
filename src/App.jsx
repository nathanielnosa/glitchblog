import Navbar from "./components/navbar/Navbar"
import './App.css'
import { Outlet } from "react-router-dom"

const App = () => {

  return (
    <section id="app">
      <Navbar />
      <Outlet />
    </section>
  )
}

export default App