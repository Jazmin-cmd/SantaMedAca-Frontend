import { horarios } from '../data/institucional'

export default function Horarios() {
  if (horarios.length === 0) {
    return <p className="pendiente">Horarios de atención a confirmar.</p>
  }

  return (
    <div className="tabla-scroll">
      <table className="tabla">
        <thead>
          <tr>
            <th>Días</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((h) => (
            <tr key={h.dia} className={h.cerrado ? 'horario-cerrado' : undefined}>
              <td>{h.dia}</td>
              <td>{h.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
