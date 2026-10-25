// Datos institucionales de SantaMed (fuente: docs/Reseña SANTAMED.pdf).
// Los campos en null todavía no están confirmados: completarlos acá y se
// actualizan en todo el sitio.

// Fotos de Unsplash (licencia libre, sin atribución obligatoria):
// consultorios: Vitaly Gariev · ecografía: unsplash.com/photos/ZL-xUYvkaKM
// radiografía: Cara Shelton · laboratorio: National Cancer Institute
import fotoConsultorios from '../assets/fotos/consultorios.webp'
import fotoEcografia from '../assets/fotos/ecografia.webp'
import fotoRadiografia from '../assets/fotos/radiografia.webp'
import fotoLaboratorio from '../assets/fotos/laboratorio.webp'
import flyerOctubreRosa from '../assets/campanias/octubre-rosa.jpeg'

// Campaña que se muestra como flyer al entrar al sitio. Para quitarla o
// cambiarla, editar este objeto (o poner `campania = null`).
export const campania = {
  imagen: flyerOctubreRosa,
  alt: 'En este #OctubreRosa nos toca cuidarnos. La detección temprana puede marcar la diferencia.',
}

export const contacto = {
  telefono: "+595 973 299 010",
  whatsapp: "595973299010", // solo números con código de país, ej. '595981000000'
  email: "contacto@santamed.com.py",
  direccion: "Gral. Bernardo O'Higgins y Mcal. Antonio Sucre",
  ciudad: 'Asunción, Paraguay',
  instagram: 'https://www.instagram.com/santamed.py/',
}

// Indicaciones para llegar en Google Maps
export const enlaceMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `SantaMed, ${contacto.direccion}, ${contacto.ciudad}`,
)}`

// Enlace de WhatsApp con un mensaje inicial (se usa para agendar consultas
// mientras no exista la agenda en línea)
export const enlaceWhatsapp = (mensaje = 'Hola SantaMed, quisiera agendar una consulta.') =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`

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
    asociado: false,
    foto: fotoConsultorios,
    fotoAlt: 'Médico conversando con una paciente en el consultorio',
  },
  {
    id: 'ecografia',
    nombre: 'Ecografía',
    descripcion: 'Estudios ecográficos realizados en nuestras instalaciones.',
    asociado: false,
    foto: fotoEcografia,
    fotoAlt: 'Profesional manejando un equipo de ecografía',
  },
  {
    id: 'radiografia',
    nombre: 'Radiografía',
    descripcion: 'Estudios radiográficos a través de prestadores asociados.',
    asociado: true,
    foto: fotoRadiografia,
    fotoAlt: 'Radiografía de muñeca y mano',
  },
  {
    id: 'laboratorio',
    nombre: 'Laboratorio',
    descripcion: 'Análisis clínicos a través de laboratorios asociados.',
    asociado: true,
    foto: fotoLaboratorio,
    fotoAlt: 'Tubos de ensayo con muestras en un laboratorio',
  },
]

export const motivos = [
  {
    titulo: 'Atención integral',
    texto:
      'Consultas y ecografías en nuestras instalaciones, y radiografía y laboratorio con prestadores asociados, coordinados para cuidar tu salud.',
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
