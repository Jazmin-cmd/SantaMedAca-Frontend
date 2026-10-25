import { Link } from 'react-router-dom'
import isotipo from '../assets/isotipo.png'
import Convenios from '../components/Convenios'
import FotoArco, { MarcaArco, TarjetaArco } from '../components/FotoArco'
import Horarios from '../components/Horarios'
import Icono from '../components/Icono'
import LlamadoAccion from '../components/LlamadoAccion'
import Modalidad from '../components/Modalidad'
import Ola from '../components/Ola'
import { convenios, horarios, motivos, servicios } from '../data/institucional'
import fotoHero from '../assets/fotos/santamed-frente.webp'

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
              Tu salud, <em>nuestra prioridad</em>
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
            <ul className="hero-confianza">
              <li><Icono nombre="check" /> {convenios[0].nombre}</li>
              <li><Icono nombre="check" /> 10 consultorios</li>
            </ul>
          </div>

          <FotoArco foto={fotoHero} alt="Frente del edificio de SantaMed" posicion="38% center">
            <TarjetaArco
              icono={<Icono nombre="reloj" />}
              rotulo={horarios[0].dia}
              dato={horarios[0].hora}
            />
            <MarcaArco />
          </FotoArco>
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
            <h2>Servicios para cuidar tu salud</h2>
          </div>
          <div className="bento">
            {servicios.map((s, i) => (
              <Link
                key={s.id}
                to={`/servicios#${s.id}`}
                className={`bento-item revelar${i === 0 ? ' bento-destacado' : ''}${
                  i === servicios.length - 1 ? ' bento-ancho' : ''
                }`}
              >
                <img src={s.foto} alt="" className="bento-foto" loading="lazy" />
                <span className="bento-icono"><Icono nombre={s.id} /></span>
                <h3>{s.nombre}</h3>
                <Modalidad asociado={s.asociado} />
                <p>{s.descripcion}</p>
                <span className="mas">Ver más <Icono nombre="flecha" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-oscura">
        <Ola invertida />
        <img src={isotipo} alt="" className="marca-agua" aria-hidden="true" />
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
            <Convenios />
          </div>
          <div className="revelar">
            <p className="etiqueta">Horarios</p>
            <h2>Horarios de atención</h2>
            <Horarios />
          </div>
        </div>
      </section>

      <LlamadoAccion />
    </>
  )
}
