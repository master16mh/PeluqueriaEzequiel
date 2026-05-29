import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import peluqueriacalidad from './assets/peluqueriacalidad.jpeg'
import Catalogo from './buttons/Catalogo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        <div className='principal'>
          <img className="logoPeluqueria" src={peluqueriacalidad} alt="Peluqueria"></img>
          <h1>Evolución Peluquería</h1>
          <h2>catalogo de cortes</h2>
          <h2>Unisex</h2>
          <h2>♂️♀️</h2>
          <Catalogo>catalogo de ofertas y cortes</Catalogo>
        </div>
      </section>
      <section>
        <div>
          <footer>Desde el 2000</footer>
        </div>
      </section>
    </>
  )
}

export default App
