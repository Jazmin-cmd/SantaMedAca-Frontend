import { useState } from 'react'
import { enviarContacto } from '../api/contacto'
import { contacto } from '../data/institucional'
import Icono from './Icono'

// Deben coincidir con ContactoRequest::MOTIVOS en el backend
const MOTIVOS = ['Consulta general', 'Turnos', 'Estudios y resultados', 'Convenio Santa Clara', 'Otro']

const VACIO = { nombre: '', email: '', telefono: '', motivo: MOTIVOS[0], mensaje: '', sitio_web: '' }

// Envía el mensaje a la API, que lo reenvía por correo a SantaMed
export default function FormularioContacto() {
  const [datos, setDatos] = useState(VACIO)
  const [estado, setEstado] = useState('editando') // editando | enviando | enviado
  const [errores, setErrores] = useState({})
  const [errorGeneral, setErrorGeneral] = useState(null)

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: undefined })
  }

  const enviar = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    setErrores({})
    setErrorGeneral(null)
    try {
      await enviarContacto(datos)
      setEstado('enviado')
    } catch (error) {
      console.error(error)
      setEstado('editando')
      if (error.status === 422) {
        setErrores(error.errores)
      } else if (error.status === 429) {
        setErrorGeneral('Enviaste varios mensajes seguidos. Esperá un minuto y probá de nuevo.')
      } else {
        setErrorGeneral('error-servidor')
      }
    }
  }

  // Muestra el primer error de validación del campo, si lo hay
  const errorDe = (campo) =>
    errores[campo]?.[0] && <span className="campo-error">{errores[campo][0]}</span>

  if (estado === 'enviado') {
    return (
      <div className="formulario formulario-listo" role="status">
        <span className="bento-icono"><Icono nombre="check" /></span>
        <h2>¡Recibimos tu mensaje!</h2>
        <p>Gracias, {datos.nombre.split(' ')[0]}. Te respondemos a {datos.email} a la brevedad.</p>
        <button
          type="button"
          className="boton boton-secundario"
          onClick={() => {
            setDatos(VACIO)
            setEstado('editando')
          }}
        >
          Escribir otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <div className="formulario-fila">
        <label>
          Nombre y apellido
          <input
            name="nombre"
            value={datos.nombre}
            onChange={cambiar}
            required
            autoComplete="name"
            aria-invalid={Boolean(errores.nombre)}
          />
          {errorDe('nombre')}
        </label>
        <label>
          Correo electrónico
          <input
            type="email"
            name="email"
            value={datos.email}
            onChange={cambiar}
            required
            autoComplete="email"
            aria-invalid={Boolean(errores.email)}
          />
          {errorDe('email')}
        </label>
      </div>
      <div className="formulario-fila">
        <label>
          <span>
            Teléfono <span className="opcional">(opcional)</span>
          </span>
          <input type="tel" name="telefono" value={datos.telefono} onChange={cambiar} autoComplete="tel" />
          {errorDe('telefono')}
        </label>
        <label>
          Motivo
          <select name="motivo" value={datos.motivo} onChange={cambiar}>
            {MOTIVOS.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          {errorDe('motivo')}
        </label>
      </div>
      <label>
        Mensaje
        <textarea
          name="mensaje"
          value={datos.mensaje}
          onChange={cambiar}
          required
          minLength={10}
          rows={5}
          placeholder="Contanos en qué te podemos ayudar"
          aria-invalid={Boolean(errores.mensaje)}
        />
        {errorDe('mensaje')}
      </label>

      {/* Campo trampa para bots: oculto para las personas */}
      <input
        type="text"
        name="sitio_web"
        value={datos.sitio_web}
        onChange={cambiar}
        className="trampa"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {errorGeneral && (
        <p className="formulario-aviso" role="alert">
          {errorGeneral === 'error-servidor' ? (
            <>
              No pudimos enviar tu mensaje. Probá de nuevo en unos minutos o escribinos
              directamente a <a href={`mailto:${contacto.email}`}>{contacto.email}</a>.
            </>
          ) : (
            errorGeneral
          )}
        </p>
      )}

      <button type="submit" className="boton" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'} <Icono nombre="flecha" />
      </button>
    </form>
  )
}
