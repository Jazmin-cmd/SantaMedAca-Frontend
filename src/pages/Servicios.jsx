import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Encabezado from '../components/Encabezado'
import Icono from '../components/Icono'
import LlamadoAccion from '../components/LlamadoAccion'
import { convenios, servicios } from '../data/institucional'

export default function Servicios() {
  const { hash } = useLocation()

  // React Router no desplaza a los anclas (#ecografia) por sí solo
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ block: 'center' })
  }, [hash])

  return (
    <>
      <Encabezado etiqueta="Servicios" titulo="Atención integral en un solo lugar">
        Consultas en distintas especialidades, estudios de imagen y análisis de laboratorio.
      </Encabezado>

      <section className="seccion">
        <div className="contenedor servicios-lista">
          {servicios.map((s, i) => (
            <article key={s.id} id={s.id} className="servicio revelar">
              <span className="servicio-numero">0{i + 1}</span>
              <span className="bento-icono"><Icono nombre={s.id} /></span>
              <div>
                <h2>{s.nombre}</h2>
                <p>{s.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="seccion seccion-suave">
        <div className="contenedor">
          <div className="titulo-seccion revelar">
            <p className="etiqueta">Convenios</p>
            <h2>Trabajamos con tu prepaga</h2>
          </div>
          {convenios.map((c) => (
            <div key={c.nombre} className="convenio revelar">
              <span className="punto" />
              <div>
                <h3>{c.nombre}</h3>
                <p>{c.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LlamadoAccion />
    </>
  )
}
