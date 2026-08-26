/**
 * Sección "Sobre..." reutilizable en las 4 marcas.
 * Soporta dos variantes visuales que existían en el sitio
 * original: "simple" (BJXMODA / León FF) y "card" (CEDICE / Kiu Models).
 *
 * @param {Object} props
 * @param {'simple'|'card'} props.variant
 * @param {string} props.image
 * @param {string} props.imageAlt
 * @param {string} [props.imageTag] - etiqueta flotante sobre la imagen
 * @param {string} [props.title] - encabezado (h2)
 * @param {string} [props.leadText] - texto plano antes del primer destacado
 * @param {string} [props.highlight] - texto destacado en negrita
 * @param {string} props.afterHighlight - texto tras el primer destacado
 * @param {string} [props.highlight2]
 * @param {string} [props.afterHighlight2]
 * @param {string} props.link
 * @param {string} props.linkLabel
 */
export default function AboutSection({
  variant = 'simple',
  image,
  imageAlt,
  imageTag,
  title,
  leadText,
  highlight,
  afterHighlight,
  highlight2,
  afterHighlight2,
  link,
  linkLabel,
}) {
  const content = (
    <div className="about__content">
      {title && <h2>{title}</h2>}
      <p>
        {leadText}
        {highlight && <span>{highlight}</span>}
        {afterHighlight}
        {highlight2 && <span>{highlight2}</span>}
        {afterHighlight2}
      </p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      )}
    </div>
  );

  if (variant === 'card') {
    return (
      <section className="about--card-wrapper">
        <div className="about--card">
          <div className="about__image">
            <img src={image} alt={imageAlt} />
            {imageTag && <h3>{imageTag}</h3>}
          </div>
          {content}
        </div>
      </section>
    );
  }

  return (
    <section className="about--simple" id="acerca-bjxmoda">
      <div className="about__image">
        <img src={image} alt={imageAlt} />
        {imageTag && <h3>{imageTag}</h3>}
      </div>
      {content}
    </section>
  );
}
