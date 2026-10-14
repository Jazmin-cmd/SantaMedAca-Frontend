import { Link } from 'react-router-dom'
import isotipo from '../assets/isotipo.png'
import Horarios from '../components/Horarios'
import Icono from '../components/Icono'
import LlamadoAccion from '../components/LlamadoAccion'
import Ola from '../components/Ola'
import { convenios, motivos, servicios } from '../data/institucional'

const accesos = [
  { to: '/servicios', texto: 'Servicios', icono: 'consultorios' },
  { to: '/profesionales', texto: 'Buscar profesional', icono: 'usuarios' },
  { to: '/contacto#horarios', texto: 'Horarios', icono: 'reloj' },
  { to: '/contacto', texto: 'Contacto', icono: 'telefono' },
]

const cifras = [
  { valor: '10', texto: 'consultorios' },
  { valor: '2024', texto: 'año de fundación' },
  { valor: '4', texto: 'áreas de servicio' },
]

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="contenedor hero-grilla">
          <div className="hero-texto">
            <p className="etiqueta">Policlínica en Asunción</p>
            <h1>
              Cuidamos tu salud de forma <span className="resaltado">integral</span>
            </h1>
            <p className="bajada">
              Consultas en distintas especialidades, ecografía, radiografía y laboratorio,
              con una atención cercana y de calidad.
            </p>
            <div className="acciones">
              <Link className="boton" to="/profesionales">
                Ver profesionales <Icono nombre="flecha" />
              </Link>
              <Link className="boton boton-secundario" to="/servicios">Nuestros servicios</Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-circulo">
              <img src={isotipo} alt="" />
            </div>
            <div className="chip chip-1">
              <strong>10</strong> consultorios
            </div>
            <div className="chip chip-2">
              <span className="punto" /> Santa Clara Prepaga
            </div>
          </div>
        </div>
        <Ola />
      </section>

      <nav className="accesos contenedor" aria-label="Accesos rápidos">
        {accesos.map((a) => (
          <Link key={a.to} to={a.to} className="acceso revelar">
            <Icono nombre={a.icono} />
            <span>{a.texto}</span>
            <Icono nombre="flecha" className="icono acceso-flecha" />
          </Link>
        ))}
      </nav>

      <section className="seccion">
        <div className="contenedor">
          <div className="titulo-seccion revelar">
            <p className="etiqueta">Servicios</p>
            <h2>Todo lo que necesitás, en un solo lugar</h2>
          </div>
          <div className="bento">
            {servicios.map((s, i) => (
              <Link
                key={s.id}
                to={`/servicios#${s.id}`}
                className={`bento-item revelar${i === 0 ? ' bento-destacado' : ''}`}
              >
                <span className="bento-icono"><Icono nombre={s.id} /></span>
                <h3>{s.nombre}</h3>
                <p>{s.descripcion}</p>
                <span className="mas">Ver más <Icono nombre="flecha" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-oscura">
        <Ola invertida />
        <div className="contenedor">
          <div className="titulo-seccion revelar">
            <p className="etiqueta">¿Por qué SantaMed?</p>
            <h2>Una atención que crece con vos</h2>
          </div>
          <div className="cifras">
            {cifras.map((c) => (
              <div key={c.texto} className="cifra revelar">
                <strong>{c.valor}</strong>
                <span>{c.texto}</span>
              </div>
            ))}
          </div>
          <div className="motivos">
            {motivos.map((m, i) => (
              <article key={m.titulo} className="motivo revelar">
                <span className="motivo-numero">0{i + 1}</span>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
              </article>
            ))}
          </div>
        </div>
        <Ola />
      </section>

      <section className="seccion">
        <div className="contenedor dos-columnas">
          <div className="revelar">
            <p className="etiqueta">Convenios</p>
            <h2>Trabajamos con tu prepaga</h2>
            {convenios.map((c) => (
              <div key={c.nombre} className="convenio">
                <span className="punto" />
                <div>
                  <h3>{c.nombre}</h3>
                  <p>{c.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="revelar">
            <p className="etiqueta">Horarios</p>
            <h2>Cuándo atendemos</h2>
            <Horarios />
          </div>
        </div>
      </section>

      <LlamadoAccion />
    </>
  )
}
