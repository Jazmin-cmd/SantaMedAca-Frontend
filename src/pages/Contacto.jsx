import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DatoPendiente from '../components/DatoPendiente'
import Encabezado from '../components/Encabezado'
import Horarios from '../components/Horarios'
import Icono from '../components/Icono'
import { contacto } from '../data/institucional'

export default function Contacto() {
  const { hash } = useLocation()

  // React Router no desplaza a los anclas (#horarios) por sí solo
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView()
  }, [hash])

  return (
    <>
      <Encabezado etiqueta="Contacto" titulo="Estamos para ayudarte">
        Escribinos o acercate a SantaMed. Te respondemos a la brevedad.
      </Encabezado>

      <section className="seccion">
        <div className="contenedor contacto-grilla">
          <article className="contacto-item revelar">
            <span className="bento-icono"><Icono nombre="telefono" /></span>
            <h3>Teléfono</h3>
            <p>
              <DatoPendiente valor={contacto.telefono}>
                <a href={`tel:${contacto.telefono}`}>{contacto.telefono}</a>
              </DatoPendiente>
            </p>
          </article>

          <article className="contacto-item revelar">
            <span className="bento-icono"><Icono nombre="whatsapp" /></span>
            <h3>WhatsApp</h3>
            <p>
              <a
                href={`https://wa.me/${contacto.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                Escribinos por WhatsApp
              </a>
            </p>
          </article>

          <article className="contacto-item revelar">
            <span className="bento-icono"><Icono nombre="correo" /></span>
            <h3>Correo</h3>
            <p>
              <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
            </p>
          </article>

          <article className="contacto-item revelar">
            <span className="bento-icono"><Icono nombre="ubicacion" /></span>
            <h3>Dirección</h3>
            <p>
              <DatoPendiente valor={contacto.direccion} />
              <br />
              {contacto.ciudad}
            </p>
          </article>
        </div>
      </section>

      <section id="horarios" className="seccion seccion-suave">
        <div className="contenedor">
          <div className="titulo-seccion revelar">
            <p className="etiqueta">Horarios</p>
            <h2>Cuándo atendemos</h2>
          </div>
          <Horarios />
        </div>
      </section>
    </>
  )
}