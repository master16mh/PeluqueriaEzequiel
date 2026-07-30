import peluqueriacalidad from '../assets/peluqueriacalidad.jpeg'
import Librito from '../Cuts/Fem/Librito.jpg'
import Pixie from '../Cuts/Fem/Pixie.jpg'
import Volver from '../Buttons/VolverEstilosProdu'

function CortesFemalPage() {
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

          <h1>Cortes Femeninos</h1>
        </div>
      </section>
      <section id="cortes">
       <div className="carta-corte">
         <img className="cortes" src={Librito} alt="Corte1" />
         <h2>Librito</h2>
       </div>
    
       <div className="carta-corte">
         <img className="cortes" src={Pixie} alt="Corte2" />
         <h2>Pixie</h2>
       </div>
     </section>
    </>
    )
}

export default CortesFemalPage