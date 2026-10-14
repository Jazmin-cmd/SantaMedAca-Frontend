import { Link } from 'react-router-dom'
import logo from '../assets/logo-santamed.png'

// Contenido tomado de docs/Reseña SANTAMED.pdf
const valores = [
  'Responsabilidad y profesionalidad',
  'Honestidad y ética profesional',
  'Orientación al cliente',
  'Trabajo en equipo',
  'Calidad',
  'Eficacia',
  'Eficiencia',
  'Innovación',
]

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="contenedor">
          <div className="hero-texto">
            <h1>Atención médica integral, accesible y de calidad</h1>
            <p className="eslogan">Tu salud, nuestra prioridad.</p>
            <Link className="boton" to="/profesionales">Conocé a nuestros profesionales</Link>
          </div>
          <img src={logo} alt="" />
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2>Quiénes somos</h2>
          <p>
            SantaMed nació en 2024 en Asunción, como una iniciativa de la familia Salomón
            Harrison, con el propósito de brindar atención médica integral, accesible y de
            calidad. Iniciamos como policlínica con tres consultorios de distintas
            especialidades, además de servicios de ecografía y prestaciones tercerizadas de
            radiografía y laboratorio.
          </p>
          <p>
            En 2025, ante el crecimiento de la demanda, ampliamos nuestra infraestructura de
            tres a diez consultorios e incorporamos nuevos servicios. Atendemos principalmente
            a beneficiarios de Santa Clara Medicina Prepaga, consolidándonos como un centro de
            referencia para su red asistencial.
          </p>
        </div>
      </section>

      <section className="seccion seccion-alterna">
        <div className="contenedor">
          <div className="tarjetas">
            <article className="tarjeta">
              <h3>Misión</h3>
              <p>
                Brindar atención médica integral y servicios de la más alta calidad para
                mejorar la salud y el bienestar de nuestros pacientes.
              </p>
            </article>
            <article className="tarjeta">
              <h3>Visión</h3>
              <p>
                Ser líderes en el campo de la salud, reconocidos por nuestra excelencia en
                diagnóstico y tratamiento, así como por nuestro compromiso con la innovación y
                mejora continua.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <h2>Nuestros valores</h2>
          <ul className="valores">
            {valores.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
