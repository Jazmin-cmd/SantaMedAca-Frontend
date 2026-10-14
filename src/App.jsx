import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contacto from './pages/Contacto'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import ProfesionalesList from './pages/ProfesionalesList'
import Servicios from './pages/Servicios'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/profesionales" element={<ProfesionalesList />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
