// Indica si el servicio se presta en SantaMed o con un prestador asociado
export default function Modalidad({ asociado }) {
  return (
    <span className={`modalidad${asociado ? ' modalidad-asociado' : ''}`}>
      {asociado ? 'Con prestador asociado' : 'En SantaMed'}
    </span>
  )
}
