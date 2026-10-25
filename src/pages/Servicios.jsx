import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import fotoRecepcion from '../assets/fotos/santamed-recepcion.webp'
import Convenios from '../components/Convenios'
import Encabezado from '../components/Encabezado'
import { TarjetaArco } from '../components/FotoArco'
import Icono from '../components/Icono'
import LlamadoAccion from '../components/LlamadoAccion'
import Modalidad from '../components/Modalidad'
import { servicios } from '../data/institucional'

export default function Servicios() {
  const { hash } = useLocation()

  // React Router no desplaza a los anclas (#ecografia) por sí solo
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ block: 'center' })
  }, [hash])

  return (
    <>
      <Encabezado
        etiqueta="Servicios"
        titulo="Cuidamos tu salud de principio a fin"
        foto={fotoRecepcion}
        fotoAlt="Recepción del Centro de Diagnóstico de SantaMed"
        posicion="30% center"
        tarjetas={
          <TarjetaArco
            icono={<Icono nombre="ecografia" />}
            rotulo="Diagnóstico"
            dato={`${servicios.length} áreas de servicio`}
          />
        }
      >
        Consultas en distintas especialidades y ecografía en SantaMed, más radiografía y
        laboratorio con prestadores asociados.
      </Encabezado>

      <section className="seccion">
        <div className="contenedor servicios-lista">
          {servicios.map((s, i) => (
            <article key={s.id} id={s.id} className="servicio revelar">
              <span className="servicio-numero">0{i + 1}</span>
              <span className="bento-icono"><Icono nombre={s.id} /></span>
              <div>
                <h2>{s.nombre}</h2>
                <Modalidad asociado={s.asociado} />
                <p>{s.descripcion}</p>
              </div>
              <img src={s.foto} alt={s.fotoAlt} className="servicio-foto" loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section className="seccion seccion-suave">
        <div className="contenedor">
          <div className="revelar">
            <Convenios />
          </div>
        </div>
      </section>

      <LlamadoAccion />
    </>
  )
}
