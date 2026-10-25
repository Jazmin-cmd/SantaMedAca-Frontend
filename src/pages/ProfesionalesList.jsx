import { useEffect, useState } from 'react'
import { listarProfesionales } from '../api/profesionales'
import Encabezado from '../components/Encabezado'
import { TarjetaArco } from '../components/FotoArco'
import Icono from '../components/Icono'
import { enlaceWhatsapp } from '../data/institucional'

const normalizar = (s) =>
  (s ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

// Iniciales del nombre sin el título (Dr., Dra., Lic.)
const iniciales = (nombre) =>
  (nombre ?? '')
    .split(/\s+/)
    .filter((parte) => parte && !parte.endsWith('.'))
    .slice(0, 2)
    .map((parte) => parte[0].toUpperCase())
    .join('')

export default function ProfesionalesList() {
  const [profesionales, setProfesionales] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [especialidad, setEspecialidad] = useState('')
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    listarProfesionales()
      .then((r) => setProfesionales(r.data))
      .catch((e) => {
        console.error(e) // el detalle técnico queda en consola, no en pantalla
        setError(e)
      })
      .finally(() => setCargando(false))
  }, [intento])

  const reintentar = () => {
    setCargando(true)
    setError(null)
    setIntento((n) => n + 1)
  }

  const especialidades = [
    ...new Set(profesionales.map((p) => p.especialidad?.nombre).filter(Boolean)),
  ].sort()

  const texto = normalizar(busqueda.trim())
  const filtrados = profesionales.filter(
    (p) =>
      (!especialidad || p.especialidad?.nombre === especialidad) &&
      (!texto || normalizar(p.nombre).includes(texto)),
  )

  return (
    <>
      <Encabezado
        etiqueta="Profesionales"
        titulo="Encontrá a tu profesional"
        tarjetas={
          <TarjetaArco
            icono={<Icono nombre="usuarios" />}
            rotulo="Nuestro equipo"
            dato={profesionales.length ? `${profesionales.length} profesionales` : 'Especialistas'}
            lado="derecha"
          />
        }
      >
        Buscá por nombre o filtrá por especialidad.
      </Encabezado>
      <section className="seccion">
        <div className="contenedor">
          <form className="filtros" onSubmit={(e) => e.preventDefault()}>
            <label>
              Nombre
              <input
                type="search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por nombre"
              />
            </label>
            <label>
              Especialidad
              <select value={especialidad} onChange={(e) => setEspecialidad(e.target.value)}>
                <option value="">Todas</option>
                {especialidades.map((e) => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
            </label>
          </form>

          {cargando && <p className="pendiente">Cargando profesionales…</p>}
          {error && (
            <div className="aviso-error" role="alert">
              <h2>No pudimos cargar los profesionales</h2>
              <p>Probá de nuevo en unos segundos o escribinos por WhatsApp y te ayudamos.</p>
              <div className="acciones">
                <button type="button" className="boton" onClick={reintentar}>
                  Reintentar
                </button>
                <a
                  className="boton boton-secundario"
                  href={enlaceWhatsapp('Hola SantaMed, quisiera consultar por un profesional.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icono nombre="whatsapp" /> Escribinos por WhatsApp
                </a>
              </div>
            </div>
          )}
          {!cargando && !error && filtrados.length === 0 && (
            <p>No se encontraron profesionales.</p>
          )}
          {!cargando && !error && filtrados.length > 0 && (
            <div className="profesionales">
              {filtrados.map((p) => (
                <article key={p.id} className="profesional">
                  <span className="avatar" aria-hidden="true">{iniciales(p.nombre)}</span>
                  <div>
                    <h3>{p.nombre}</h3>
                    <p className="especialidad">{p.especialidad?.nombre}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}