import peluqueriacalidad from '../assets/peluqueriacalidad.jpeg'

import Catalogo from '../Buttons/CatalogoButton'
import Carrito from '../Buttons/CarritoButton'
import Turnero from '../Buttons/TurneroButton'

import '../App.css'

function InicioPage() {
  return (
    <>
      <section id="center">
        <div className="hero">
        </div>

        <div className='principal'>
          <img
            className="logoPeluqueria"
            src={peluqueriacalidad}
            alt="Peluqueria"
          />

          <h1>Belleza, cosmética y cuidado personal</h1>

          <div className='botones'>
            <Catalogo />
            <Carrito />
            <Turnero />
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

export default InicioPage