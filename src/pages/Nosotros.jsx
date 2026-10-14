import Encabezado from '../components/Encabezado'
import LlamadoAccion from '../components/LlamadoAccion'
import { valores } from '../data/institucional'

// Contenido tomado de docs/Reseña SANTAMED.pdf
const hitos = [
  {
    anio: '2024',
    titulo: 'Nace SantaMed',
    texto:
      'Por iniciativa de la familia Salomón Harrison, abrimos como policlínica con tres consultorios, ecografía y prestaciones tercerizadas de radiografía y laboratorio.',
  },
  {
    anio: '2025',
    titulo: 'Crecemos',
    texto:
      'Ante el crecimiento de la demanda, pasamos de tres a diez consultorios e incorporamos nuevos servicios.',
  },
  {
    anio: 'Hoy',
    titulo: 'Centro de referencia',
    texto:
      'Atendemos principalmente a beneficiarios de Santa Clara Medicina Prepaga, con un equipo orientado al bienestar de cada paciente.',
  },
]

export default function Nosotros() {
  return (
    <>
      <Encabezado etiqueta="Nosotros" titulo="Atención médica cercana, desde Asunción">
        Nacimos con el propósito de brindar atención médica integral, accesible y de calidad.
      </Encabezado>

      <section className="seccion">
        <div className="contenedor">
          <div className="titulo-seccion revelar">
            <p className="etiqueta">Nuestra historia</p>
            <h2>Un camino de crecimiento</h2>
          </div>
          <ol className="linea-tiempo">
            {hitos.map((h) => (
              <li key={h.anio} className="revelar">
                <span className="hito-anio">{h.anio}</span>
                <h3>{h.titulo}</h3>
                <p>{h.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="seccion seccion-suave">
        <div className="contenedor mision-vision">
          <article className="revelar">
            <p className="etiqueta">Misión</p>
            <p className="cita">
              Brindar atención médica integral y servicios de la más alta calidad para mejorar
              la salud y el bienestar de nuestros pacientes.
            </p>
          </article>
          <article className="revelar">
            <p className="etiqueta">Visión</p>
            <p className="cita">
              Ser líderes en el campo de la salud, reconocidos por nuestra excelencia en
              diagnóstico y tratamiento, así como por nuestro compromiso con la innovación y
              mejora continua.
            </p>
          </article>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="titulo-seccion revelar">
            <p className="etiqueta">Valores</p>
            <h2>Lo que nos guía</h2>
          </div>
          <ul className="valores">
            {valores.map((v) => (
              <li key={v} className="revelar">{v}</li>
            ))}
          </ul>
        </div>
      </section>

      <LlamadoAccion />
    </>
  )
}
