import { useEffect, useRef } from 'react'
import { campania } from '../data/institucional'

// Flyer de la campaña vigente: se abre cada vez que alguien entra al sitio y
// se cierra con la ×, con Esc o haciendo clic fuera de la imagen.
export default function FlyerCampania({ alCerrar }) {
  const dialogo = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => dialogo.current?.showModal(), 600)
    return () => clearTimeout(t)
  }, [])

  if (!campania) return null

  const cerrar = () => dialogo.current?.close()

  return (
    <dialog
      ref={dialogo}
      className="flyer"
      aria-label="Campaña de SantaMed"
      onClose={alCerrar}
      // Clic en el fondo oscuro (fuera del contenido) cierra el flyer
      onClick={(e) => e.target === dialogo.current && cerrar()}
    >
      <div className="flyer-contenido">
        <button type="button" className="flyer-cerrar" onClick={cerrar} aria-label="Cerrar">
          ×
        </button>
        <img src={campania.imagen} alt={campania.alt} />
      </div>
    </dialog>
  )
}
