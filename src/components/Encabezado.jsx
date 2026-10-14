import Ola from './Ola'

// Cabecera de página interna: etiqueta, título y bajada sobre fondo verde
export default function Encabezado({ etiqueta, titulo, children }) {
  return (
    <section className="encabezado">
      <div className="contenedor">
        <p className="etiqueta">{etiqueta}</p>
        <h1>{titulo}</h1>
        {children && <p className="bajada">{children}</p>}
      </div>
      <Ola />
    </section>
  )
}
