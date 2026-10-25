import { api } from './client'

export const enviarContacto = (datos) => api('/contacto', { method: 'POST', body: datos })
