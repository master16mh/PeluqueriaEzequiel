import peluqueriacalidad from '../assets/peluqueriacalidad.jpeg'
import Volver from '../Buttons/VolverButton'
import Carrito from '../Components/Carrito'

function CarritoPage() {
  return (
    <>
    <Volver></Volver>
      <section id="center">
        <div className='PagCarrito'>
          <img
            className="logoPeluqueria"
            src={peluqueriacalidad}
            alt="Peluqueria"
          />

          <h1>Carrito</h1>
          <Carrito/>
        </div>
      </section>
    </>
  )
}

export default CarritoPage