import { api } from './client'

export const listarProfesionales = () => api('/profesionales')
export const obtenerProfesional = (id) => api(`/profesionales/${id}`)
export const crearProfesional = (datos) => api('/profesionales', { method: 'POST', body: datos })
export const actualizarProfesional = (id, datos) => api(`/profesionales/${id}`, { method: 'PUT', body: datos })
export const eliminarProfesional = (id) => api(`/profesionales/${id}`, { method: 'DELETE' })