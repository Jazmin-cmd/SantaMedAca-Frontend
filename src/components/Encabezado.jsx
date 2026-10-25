import FotoArco from './FotoArco'
import Ola from './Ola'

// Cabecera de página interna: texto a la izquierda y foto en arco a la derecha
// (o el isotipo si no hay foto). `tarjetas` son los elementos flotantes.
export default function Encabezado({ etiqueta, titulo, children, foto, fotoAlt, posicion, tarjetas }) {
  return (
    <section className="encabezado">
      <div className="contenedor encabezado-grilla">
        <div>
          <p className="etiqueta">{etiqueta}</p>
          <h1>{titulo}</h1>
          {children && <p className="bajada">{children}</p>}
        </div>
        <FotoArco foto={foto} alt={fotoAlt} posicion={posicion}>
          {tarjetas}
        </FotoArco>
      </div>
      <Ola />
    </section>
  )
}
