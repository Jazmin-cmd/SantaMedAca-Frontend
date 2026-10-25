import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import fotoOficina from '../assets/fotos/santamed-oficina.webp'
import Encabezado from '../components/Encabezado'
import FormularioContacto from '../components/FormularioContacto'
import { TarjetaArco } from '../components/FotoArco'
import Icono from '../components/Icono'
import { contacto, horarios } from '../data/institucional'

export default function Contacto() {
  const { hash } = useLocation()

  // React Router no desplaza a los anclas (#horarios) por sí solo
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView()
  }, [hash])

  return (
    <>
      <Encabezado
        etiqueta="Contacto"
        titulo="Estamos para ayudarte"
        foto={fotoOficina}
        fotoAlt="Oficina de atención de SantaMed"
        posicion="45% center"
        tarjetas={
          <TarjetaArco
            icono={<Icono nombre="reloj" />}
            rotulo={horarios[0].dia}
            dato={horarios[0].hora}
          />
        }
      >
        Dejanos tu mensaje y te respondemos a la brevedad.
      </Encabezado>

      <section className="seccion">
        <div className="contenedor contacto-grilla">
          <div className="revelar">
            <FormularioContacto />
          </div>

          <aside id="horarios" className="contacto-panel revelar">
            <p className="etiqueta">Escribinos</p>
            <a className="contacto-correo" href={`mailto:${contacto.email}`}>
              <Icono nombre="correo" /> {contacto.email}
            </a>
            <p>Te respondemos dentro de nuestro horario de atención.</p>

            <h2>Horarios de atención</h2>
            <ul className="contacto-horarios">
              {horarios.map((h) => (
                <li key={h.dia} className={h.cerrado ? 'horario-cerrado' : undefined}>
                  <span>{h.dia}</span>
                  <strong>{h.hora}</strong>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}