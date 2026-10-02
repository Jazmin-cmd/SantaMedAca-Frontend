import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <strong>SantaMed</strong>
        <nav>
          <NavLink to="/profesionales">Profesionales</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}