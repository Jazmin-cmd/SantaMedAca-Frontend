const API_URL = import.meta.env.VITE_API_URL

export async function api(ruta, { method = 'GET', body } = {}) {
  const res = await fetch(`${API_URL}${ruta}`, {
    method,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (res.status === 204) return null

  // Si VITE_API_URL no llegó al build, la petición cae en el servidor del
  // frontend, que responde index.html en lugar de JSON
  if (!res.headers.get('content-type')?.includes('application/json')) {
    throw new Error(`La API no respondió JSON en ${API_URL}${ruta} (¿falta VITE_API_URL?)`)
  }
  const datos = await res.json()

  if (!res.ok) {
    const error = new Error(datos.message ?? 'Error en la API')
    error.status = res.status
    error.errores = datos.errors ?? {}   // errores de validación (422)
    throw error
  }
  return datos
}