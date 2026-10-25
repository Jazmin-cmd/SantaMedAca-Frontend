import isotipo from '../assets/isotipo.png'

const RAYOS = [-70, -50, -30, -10, 10, 30, 50, 70]

// Foto con forma de arco (como la figura del isotipo) y rayos que salen de
// arriba. Sin `foto`, muestra el isotipo en un medallón. `children` son las
// tarjetas flotantes que se posicionan sobre el arco.
export default function FotoArco({ foto, alt = '', posicion = 'center', children }) {
  return (
    <div className="arco-visual">
      <svg className="arco-rayos" viewBox="0 0 200 100" aria-hidden="true">
        {RAYOS.map((g) => (
          <line key={g} x1="100" y1="88" x2="100" y2="8" transform={`rotate(${g} 100 100)`} />
        ))}
      </svg>
      <div className={`arco${foto ? '' : ' arco-medallon'}`}>
        {foto ? (
          <img src={foto} alt={alt} style={{ objectPosition: posicion }} />
        ) : (
          <img src={isotipo} alt="" />
        )}
      </div>
      {children}
    </div>
  )
}

// Tarjeta flotante con ícono, rótulo chico y dato destacado
export function TarjetaArco({ icono, rotulo, dato, lado = 'izquierda' }) {
  return (
    <div className={`arco-tarjeta arco-tarjeta-${lado}`} aria-hidden="true">
      <span className="arco-tarjeta-icono">{icono}</span>
      <span>
        <small>{rotulo}</small>
        <strong>{dato}</strong>
      </span>
    </div>
  )
}

export function MarcaArco() {
  return (
    <div className="arco-marca" aria-hidden="true">
      <img src={isotipo} alt="" />
    </div>
  )
}
