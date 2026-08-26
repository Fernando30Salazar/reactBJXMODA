/**
 * Carrusel/hero reutilizable. Recibe grupos de 4 imágenes
 * (replicando la animación original de 4 slides) y el logo
 * a mostrar sobre el carrusel.
 * @param {Object} props
 * @param {Array<Array<{src:string, alt:string}>>} props.groups
 * @param {string} props.logo
 */
export default function Carousel({ groups, logo }) {
  return (
    <section className="carousel">
      <div className="carousel__track">
        {groups.map((group, groupIndex) => (
          <div className="carousel__group" key={groupIndex}>
            {group.map((img, imgIndex) => (
              <img key={imgIndex} src={img.src} alt={img.alt} loading={groupIndex === 0 ? 'eager' : 'lazy'} />
            ))}
          </div>
        ))}
      </div>

      <div className="carousel__logo">
        <img src={logo} alt="Logo" />
      </div>
    </section>
  );
}
