import { useState } from 'react'
import peluqueriacalidad from './assets/peluqueriacalidad.jpeg'
import Catalogo from './Buttons/Catalogo'
import Carrito from './Buttons/Carrito'
import Turnero from './Buttons/Turnero'
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
          <h1>Belleza, cosmética y cuidado personal</h1>
          <div className='botones'>
             <Catalogo></Catalogo>
             <Carrito></Carrito>
             <Turnero></Turnero>
          </div>
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
