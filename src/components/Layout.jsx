import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo-santamed.png'

export default function Layout() {
  return (
    <>
      <header className="cabecera">
        <div className="contenedor">
          <Link to="/">
            <img src={logo} alt="SantaMed — Tu salud, nuestra prioridad" />
          </Link>
          <nav>
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/profesionales">Profesionales</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="pie">
        <div className="contenedor">
          <p>© {new Date().getFullYear()} SantaMed · Asunción, Paraguay</p>
          <p>Atentto E.A.S · RUC 80148681-5</p>
        </div>
      </footer>
    </>
  )
}
