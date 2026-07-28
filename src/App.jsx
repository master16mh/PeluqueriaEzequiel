import { Routes, Route } from 'react-router-dom'
import InicioPage from './Pages/InicioPage'
import CatalogoPage from './Pages/CatalogoPage'
import CarritoPage from './Pages/CarritoPage'
import TurneroPage from './Pages/TurneroPage'
import CortesMascuPage from './Pages/CortesMascuPage'
import CortesFemalPage from './Pages/CortesFemalPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<InicioPage />} />
      <Route path="/catalogo" element={<CatalogoPage />} />
      <Route path="/carrito" element={<CarritoPage/>} />
      <Route path="/turnero" element={<TurneroPage/>} />
      <Route path="/cortes/masculinos" element={<CortesMascuPage/>} />
      <Route path="/cortes/femeninos" element={<CortesFemalPage/>} />
    </Routes>
  )
}

export default App
