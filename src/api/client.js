const API_URL = import.meta.env.VITE_API_URL

export async function api(ruta, { method = 'GET', body } = {}) {
  const res = await fetch(`${API_URL}${ruta}`, {
    method,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (res.status === 204) return null
  const datos = await res.json()

  if (!res.ok) {
    const error = new Error(datos.message ?? 'Error en la API')
    error.errores = datos.errors ?? {}   // errores de validación (422)
    throw error
  }
  return datos
}