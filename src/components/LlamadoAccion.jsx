import { Link } from 'react-router-dom'
import fotoSalaEspera from '../assets/fotos/santamed-sala-espera.webp'
import { contacto, enlaceMapa } from '../data/institucional'
import Icono from './Icono'

// Cierre de página: invita a visitarnos (WhatsApp ya está en el botón flotante).
// `foto` permite cambiar la imagen para no repetir la del encabezado.
export default function LlamadoAccion({ foto = fotoSalaEspera, fotoAlt = 'Sala de espera de SantaMed' }) {
  return (
    <section className="seccion">
      <div className="contenedor">
        <div className="cta revelar">
          <img src={foto} alt={fotoAlt} className="cta-foto" loading="lazy" />
          <div className="cta-texto">
            <p className="etiqueta">Visitanos</p>
            <h2>Te esperamos en SantaMed</h2>
            <p className="cta-direccion">
              <Icono nombre="ubicacion" /> {contacto.direccion}, {contacto.ciudad}
            </p>
            <div className="acciones">
              <a className="boton" href={enlaceMapa} target="_blank" rel="noreferrer">
                Cómo llegar <Icono nombre="flecha" />
              </a>
              <Link className="boton boton-secundario" to="/profesionales">Ver profesionales</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
