const MAPA_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.671055303845!2d-57.5750266165452!3d-25.290124241115816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da900437fc9f9%3A0x3f9c374fb087cbfb!2sSanta%20Med!5e0!3m2!1ses-419!2spy!4v1792022446896!5m2!1ses-419!2spy'

export default function Mapa() {
  return (
    <div className="mapa">
      <iframe
        title="Ubicación de SantaMed en Google Maps"
        src={MAPA_SRC}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}