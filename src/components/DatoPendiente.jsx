// Muestra un valor institucional o un aviso si todavía no fue cargado
export default function DatoPendiente({ valor, children }) {
  if (!valor) return <span className="pendiente">A confirmar</span>
  return children ?? valor
}
