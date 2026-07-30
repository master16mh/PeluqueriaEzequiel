import peluqueriacalidad from '../assets/peluqueriacalidad.jpeg'
import Fleco from '../Cuts/Masc/Fleco.jpg'
import Mediolargo from '../Cuts/Masc/Medio-largo.jpg'
import TaperFade from '../Cuts/Masc/Taper-fade.jpg'
import Texturizado from '../Cuts/Masc/Texturizado.jpg'
import Volver from '../Buttons/VolverEstilosProdu'

function CortesMascuPage() {
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

          <h1>Cortes Masculinos</h1>
        </div>
      </section>
     <section id="cortes">
      <div className="carta-corte">
        <img className="cortes" src={Fleco} alt="Corte1" />
        <h2>Flequillo</h2>
      </div>

      <div className="carta-corte">
        <img className="cortes" src={Mediolargo} alt="Corte2" />
        <h2>Medio Largo</h2>
      </div>

      <div className="carta-corte">
        <img className="cortes" src={TaperFade} alt="Corte3" />
        <h2>Taper Fade</h2>
      </div>

      <div className="carta-corte">
        <img className="cortes" src={Texturizado} alt="Corte4" />
        <h2>Texturizado</h2>
      </div>
    </section>
    </>
  )
}

export default CortesMascuPage