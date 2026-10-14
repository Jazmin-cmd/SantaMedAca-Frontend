import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import ProfesionalesList from './pages/ProfesionalesList'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/profesionales" element={<ProfesionalesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}