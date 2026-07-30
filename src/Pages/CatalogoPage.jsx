import peluqueriacalidad from '../assets/peluqueriacalidad.jpeg'
import Mascu from '../Buttons/MascuButton'
import Female from '../Buttons/FemalButton'
import Volver from '../Buttons/VolverButton'
import Productos from '../Components/Productos'

function CatalogoPage() {
  return (
    <>
    <Volver></Volver>
   
      <section id="center">
        <div className='PagCatalogo'>
          <img
            className="logoPeluqueria"
            src={peluqueriacalidad}
            alt="Peluqueria"
          />

          <h1>Estilos y Productos</h1>
        </div>
         <div className= "botones-HyM">
            <Mascu>Cortes Masculinos</Mascu>
            <Female>Cortes Femeninos</Female>
         </div>

         <Productos/>
      </section>
    </>
  )
}

export default CatalogoPage