import { Link } from 'react-router-dom'
import isotipo from '../assets/isotipo.png'
import Icono from './Icono'

export default function LlamadoAccion() {
  return (
    <section className="seccion">
      <div className="contenedor">
        <div className="cta revelar">
          <img src={isotipo} alt="" className="cta-marca" />
          <div>
            <h2>¿Necesitás una consulta?</h2>
            <p>Encontrá al profesional indicado y coordiná tu atención con nosotros.</p>
          </div>
          <div className="acciones">
            <Link className="boton" to="/profesionales">
              Ver profesionales <Icono nombre="flecha" />
            </Link>
            <Link className="boton boton-secundario" to="/contacto">Contactanos</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
