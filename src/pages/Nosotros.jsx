import fotoEscalera from '../assets/fotos/santamed-escalera.webp'
import fotoFrente from '../assets/fotos/santamed-frente.webp'
import fotoOficina from '../assets/fotos/santamed-oficina.webp'
import fotoRecepcion from '../assets/fotos/santamed-recepcion.webp'
import Encabezado from '../components/Encabezado'
import { TarjetaArco } from '../components/FotoArco'
import Icono from '../components/Icono'
import { contacto, enlaceMapa, valores } from '../data/institucional'

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
      <Encabezado
        etiqueta="Nosotros"
        titulo="Atención médica cercana, desde Asunción"
        foto={fotoEscalera}
        fotoAlt="Recepción de SantaMed con su escalera caracol"
        posicion="60% center"
        tarjetas={
          <TarjetaArco icono={<Icono nombre="check" />} rotulo="Desde 2024" dato="En Asunción" />
        }
      >
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

      <section className="seccion seccion-suave">
        <div className="contenedor">
          <div className="titulo-seccion revelar">
            <p className="etiqueta">Nuestras instalaciones</p>
            <h2>Un espacio pensado para tu comodidad</h2>
          </div>
          <div className="galeria">
            <figure className="galeria-item galeria-principal revelar">
              <img src={fotoFrente} alt="Frente del edificio de SantaMed" loading="lazy" />
              <figcaption>Nuestro edificio</figcaption>
            </figure>
            <figure className="galeria-item revelar">
              <img src={fotoRecepcion} alt="Sala de espera del Centro de Diagnóstico" loading="lazy" />
              <figcaption>Centro de Diagnóstico</figcaption>
            </figure>
            <figure className="galeria-item revelar">
              <img src={fotoOficina} alt="Oficina de atención administrativa" loading="lazy" />
              <figcaption>Atención administrativa</figcaption>
            </figure>
            <div className="galeria-item galeria-dato revelar">
              <strong>10</strong>
              <span>consultorios para tu atención</span>
              <a className="boton boton-chico" href={enlaceMapa} target="_blank" rel="noreferrer">
                Cómo llegar <Icono nombre="flecha" />
              </a>
              <small>{contacto.direccion}</small>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
