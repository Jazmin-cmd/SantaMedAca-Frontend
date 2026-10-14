// Íconos de línea propios, en el mismo trazo que el isotipo
const trazos = {
  consultorios: (
    <>
      <path d="M6 3v6a6 6 0 0 0 12 0V3" />
      <path d="M12 15v2a4 4 0 0 0 8 0v-3" />
      <circle cx="20" cy="12" r="2" />
    </>
  ),
  ecografia: (
    <>
      <path d="M4 20a8 8 0 0 1 16 0" />
      <path d="M7.5 20a4.5 4.5 0 0 1 9 0" />
      <path d="M12 4v8" />
      <path d="M9 7l3-3 3 3" />
    </>
  ),
  radiografia: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="3" />
      <path d="M12 6v12M8.5 9h7M9 12h6M9.5 15h5" />
    </>
  ),
  laboratorio: (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  telefono: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.4-4.2A8 8 0 1 1 8.4 18.8z" />
      <path d="M9.5 9.5c0 3 2 5 5 5l1-1.5-2-1-1 .8a3.5 3.5 0 0 1-1.8-1.8l.8-1-1-2z" />
    </>
  ),
  correo: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  ubicacion: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  usuarios: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3 6" />
    </>
  ),
  flecha: <path d="M5 12h14M13 6l6 6-6 6" />,
}

export default function Icono({ nombre, className = 'icono' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {trazos[nombre]}
    </svg>
  )
}
