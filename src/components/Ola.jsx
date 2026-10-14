// Separador ondulado inspirado en las olas del isotipo.
// `color` es el fondo de la sección siguiente.
export default function Ola({ color = 'var(--bg)', invertida = false }) {
  return (
    <svg
      className={`ola${invertida ? ' ola-invertida' : ''}`}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={color}
        d="M0 48c160-32 320-32 480 0s320 32 480 0 320-32 480 0v32H0z"
      />
    </svg>
  )
}
