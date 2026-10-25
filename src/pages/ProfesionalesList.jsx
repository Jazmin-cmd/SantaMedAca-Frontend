import { useEffect, useState } from 'react'
import { listarProfesionales } from '../api/profesionales'
import Encabezado from '../components/Encabezado'

const normalizar = (s) =>
  (s ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const iniciales = (nombre) =>
  (nombre ?? '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0].toUpperCase())
    .join('')

export default function ProfesionalesList() {
  const [profesionales, setProfesionales] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [especialidad, setEspecialidad] = useState('')

  useEffect(() => {
    listarProfesionales()
      .then((r) => setProfesionales(r.data))
      .catch(setError)
      .finally(() => setCargando(false))
  }, [])

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
      <Encabezado etiqueta="Profesionales" titulo="Encontrá a tu profesional">
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
          {error && <p>Error: {error.message}</p>}
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