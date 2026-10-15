import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/logo-santamed-full-color.svg'
import logoBlanco from '../assets/logo-santamed-blanco.svg'
import { contacto, empresa } from '../data/institucional'
import DatoPendiente from './DatoPendiente'
import Instagram from './Instagram'
import Mapa from './Mapa'
import Icono from './Icono'

const enlaces = [
  { to: '/', texto: 'Inicio', end: true },
  { to: '/nosotros', texto: 'Nosotros' },
  { to: '/servicios', texto: 'Servicios' },
  { to: '/profesionales', texto: 'Profesionales' },
  { to: '/contacto', texto: 'Contacto' },
]

export default function Layout() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [conScroll, setConScroll] = useState(false)
  const { pathname, hash } = useLocation()

  // Volver arriba al cambiar de página (salvo que se pida un ancla)
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    const alScroll = () => setConScroll(window.scrollY > 8)
    alScroll()
    window.addEventListener('scroll', alScroll, { passive: true })
    return () => window.removeEventListener('scroll', alScroll)
  }, [])

  // Animación de entrada para los elementos .revelar al entrar en pantalla
  useEffect(() => {
    const elementos = document.querySelectorAll('.revelar:not(.visible)')
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('visible'))
      return
    }
    const observador = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observador.unobserve(e.target)
          }
        }),
      { threshold: 0.15 },
    )
    elementos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  })

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <>
      <header className={`cabecera${conScroll ? ' con-scroll' : ''}`}>
        <div className="contenedor">
          <Link to="/" onClick={cerrarMenu} className="cabecera-logo">
            <img src={logo} alt="SantaMed — Tu salud, nuestra prioridad" />
          </Link>
          <button
            className="boton-menu"
            aria-expanded={menuAbierto}
            aria-controls="menu-principal"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <span />
            <span />
            <span className="sr-only">Menú</span>
          </button>
          <nav id="menu-principal" className={menuAbierto ? 'abierto' : ''}>
            {enlaces.map((e) => (
              <NavLink key={e.to} to={e.to} end={e.end} onClick={cerrarMenu}>
                {e.texto}
              </NavLink>
            ))}
            <Link to="/profesionales" className="boton boton-chico" onClick={cerrarMenu}>
              Agendar consulta
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>


      <footer className="pie">
        <div className="contenedor pie-columnas">
          <div className="pie-marca">
            <img src={logoBlanco} alt="SantaMed" />
          </div>

          <div style={{ paddingLeft: '40px' }}>
            <p className="pie-titulo">Secciones</p>
            {enlaces.slice(1).map((e) => (
              <p key={e.to}>
                <Link to={e.to}>{e.texto}</Link>
              </p>
            ))}
          </div>

          <div>
            <p className="pie-titulo">Contacto</p>

            <p className="pie-dato">
              <span className="pie-icono"><Icono nombre="telefono" /></span>
              <DatoPendiente valor={contacto.telefono} />
            </p>

            <p className="pie-dato">
              <span className="pie-icono"><Icono nombre="ubicacion" /></span>
              <span>
                <DatoPendiente valor={contacto.direccion} />
                <br />
                {contacto.ciudad}
              </span>
            </p>

            <div className="pie-redes">
              <Instagram />
              <span>@santamed.py</span>
            </div>
          </div>

          <div className="pie-mapa">
            <Mapa />
          </div>
        </div>

        <div className="contenedor pie-legal">
          <p>© {new Date().getFullYear()} SantaMed · {empresa.razonSocial} · RUC {empresa.ruc}</p>
        </div>
      </footer>
    </>
  )
}
