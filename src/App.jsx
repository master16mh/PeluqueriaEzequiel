import { useState } from 'react'
import peluqueriacalidad from './assets/peluqueriacalidad.jpeg'
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
          <h2>Unisex</h2>
          <h2>♂️♀️</h2>
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
