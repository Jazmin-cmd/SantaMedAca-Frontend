import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProfesionalesList from './pages/ProfesionalesList'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/profesionales" />} />
          <Route path="/profesionales" element={<ProfesionalesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}