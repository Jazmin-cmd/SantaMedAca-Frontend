import { useEffect, useState } from 'react'
import isotipo from '../assets/isotipo.png'
import { enlaceWhatsapp } from '../data/institucional'

const CLAVE_CERRADO = 'santamed-burbuja-cerrada'

const leerCerrado = () => {
  try {
    return sessionStorage.getItem(CLAVE_CERRADO) === '1'
  } catch {
    return false
  }
}

// Botón flotante de WhatsApp con una burbuja de saludo que aparece a los
// pocos segundos. Si el visitante la cierra, no vuelve a aparecer en la sesión.
// `pausado` la retiene mientras haya otro elemento encima (p. ej. el flyer).
export default function WhatsappFlotante({ pausado = false }) {
  const [burbuja, setBurbuja] = useState(false)

  useEffect(() => {
    if (pausado || leerCerrado()) return
    const t = setTimeout(() => setBurbuja(true), 4000)
    return () => clearTimeout(t)
  }, [pausado])

  const cerrar = () => {
    setBurbuja(false)
    try {
      sessionStorage.setItem(CLAVE_CERRADO, '1')
    } catch {
      // sin almacenamiento disponible: solo se cierra por ahora
    }
  }

  return (
    <div className="wa-flotante">
      {burbuja && (
        <div className="wa-burbuja" role="status">
          <button type="button" className="wa-cerrar" onClick={cerrar} aria-label="Cerrar mensaje">
            ×
          </button>
          <img src={isotipo} alt="" className="wa-avatar" />
          <div>
            <strong>SantaMed</strong>
            <p>¡Hola! ¿Agendamos tu consulta? Escribinos y te respondemos.</p>
          </div>
        </div>
      )}
      <a
        className="wa-boton"
        href={enlaceWhatsapp()}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir a SantaMed por WhatsApp"
        onClick={cerrar}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 13.9c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.8-4.3-.2-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.3 0 .5l-.4.6-.3.4c-.1.1-.2.3-.1.5.2.3.7 1.2 1.5 1.9 1 .9 1.8 1.2 2.1 1.3.2.1.4.1.5-.1l.8-1c.2-.2.3-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3z"
          />
        </svg>
        <span className="wa-texto">Agendá por WhatsApp</span>
      </a>
    </div>
  )
}
