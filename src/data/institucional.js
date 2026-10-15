// Datos institucionales de SantaMed (fuente: docs/Reseña SANTAMED.pdf).
// Los campos en null todavía no están confirmados: completarlos acá y se
// actualizan en todo el sitio.

export const contacto = {
  telefono: "+595 973 299 010",
  whatsapp: "595973299010", // solo números con código de país, ej. '595981000000'
  email: "contacto@santamed.com.py",
  direccion: "Gral. Bernardo O'Higgins y Mcal. Antonio Sucre",
  ciudad: 'Asunción, Paraguay',
  instagram: 'https://www.instagram.com/santamed.py/',
}

// Cada fila: { dias, horario }
export const horarios = [
  { dia: 'Lunes a Viernes', hora: '7:00 a 20:00 h' },
  { dia: 'Sábado', hora: '8:00 a 12:00 h' },
  { dia: 'Domingo', hora: 'Cerrado', cerrado: true },
]

export const servicios = [
  {
    id: 'consultorios',
    nombre: 'Consultas médicas',
    descripcion:
      'Diez consultorios con atención en distintas especialidades médicas, enfocados en una atención cercana y personalizada.',
  },
  {
    id: 'ecografia',
    nombre: 'Ecografía',
    descripcion: 'Estudios ecográficos realizados en nuestras instalaciones.',
  },
  {
    id: 'radiografia',
    nombre: 'Radiografía',
    descripcion: 'Estudios radiográficos a través de prestadores asociados.',
  },
  {
    id: 'laboratorio',
    nombre: 'Laboratorio',
    descripcion: 'Análisis clínicos a través de laboratorios asociados.',
  },
]

export const motivos = [
  {
    titulo: 'Atención integral',
    texto:
      'Consultas, estudios de imagen y laboratorio coordinados en un solo lugar para cuidar tu salud de forma completa.',
  },
  {
    titulo: 'Crecimiento constante',
    texto:
      'Desde 2024 pasamos de tres a diez consultorios e incorporamos nuevos servicios para responder a la demanda de nuestros pacientes.',
  },
  {
    titulo: 'Equipo comprometido',
    texto:
      'Un equipo orientado al bienestar de cada paciente, que busca la excelencia, la innovación y la mejora continua.',
  },
]

export const convenios = [
  {
    nombre: 'Santa Clara Medicina Prepaga',
    descripcion: 'Centro de referencia para la red asistencial de sus beneficiarios.',
  },
]

export const valores = [
  'Responsabilidad y profesionalidad',
  'Honestidad y ética profesional',
  'Orientación al cliente',
  'Trabajo en equipo',
  'Calidad',
  'Eficacia',
  'Eficiencia',
  'Innovación',
]

export const empresa = {
  razonSocial: 'Atentto E.A.S',
  ruc: '80148681-5',
}
