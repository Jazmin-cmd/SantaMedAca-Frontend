import { contacto } from '../data/institucional'

export default function Instagram() {
  return (
    <a
      className="redes-link"
      href={contacto.instagram}
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram de SantaMed (@santamed.py)"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
  )
}