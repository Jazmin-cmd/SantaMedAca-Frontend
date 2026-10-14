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
            <th>Servicio</th>
            <th>Días</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((h) => (
            <tr key={h.servicio + h.dias}>
              <td>{h.servicio}</td>
              <td>{h.dias}</td>
              <td>{h.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
