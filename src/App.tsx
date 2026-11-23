import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Link to="/">Inicio</Link><br />
        <Link to="/hermano">Hermano</Link><br />
        <Link to="/hijo">Hijo</Link>


        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
