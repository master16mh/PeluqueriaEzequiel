import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import peluqueriacalidad from '../assets/peluqueriacalidad.jpeg'
import Volver from '../Buttons/VolverButton'

function TurneroPage() {
  const [fecha, setFecha] = useState(new Date());
  return (
    <>
    <Volver></Volver>
      <section id="center">
        <div className='PagTurnero'>
          <img
            className="logoPeluqueria"
            src={peluqueriacalidad}
            alt="Peluqueria"
          />
          <h1>Turnos y horarios</h1>
        </div>
        <div className="contenedor-calendario">
         <Calendar
           onChange={setFecha}
           value={fecha}
         />
        </div>
      </section>
    </>
  )
}

export default TurneroPage