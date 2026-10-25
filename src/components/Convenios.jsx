import { convenios } from '../data/institucional'

// Hoy hay un solo convenio: el título lo nombra para no prometer más de lo que hay
export default function Convenios() {
  const titulo =
    convenios.length === 1 ? `Convenio con ${convenios[0].nombre}` : 'Nuestros convenios'

  return (
    <>
      <p className="etiqueta">Convenios</p>
      <h2>{titulo}</h2>
      {convenios.map((c) => (
        <div key={c.nombre} className="convenio">
          <span className="punto" />
          <div>
            {convenios.length > 1 && <h3>{c.nombre}</h3>}
            <p>{c.descripcion}</p>
          </div>
        </div>
      ))}
    </>
  )
}
