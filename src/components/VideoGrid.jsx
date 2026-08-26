/**
 * Grid de videos reutilizable (BJXMODA "shorts" / León FF "proyectos audiovisuales").
 * @param {Object} props
 * @param {'default'|'serif'} [props.variant] - variante tipográfica del encabezado
 * @param {string} props.heading
 * @param {string} props.description
 * @param {string} props.exploreLink
 * @param {string} props.exploreLabel
 * @param {Array<{image:string,title:string,description:string,link:string,tag?:string}>} props.items
 */
export default function VideoGrid({ variant = 'default', heading, description, exploreLink, exploreLabel, items }) {
  const headerClass =
    variant === 'serif' ? 'video-section__header video-section__header--serif' : 'video-section__header';

  return (
    <section className="video-section">
      <div className={headerClass}>
        <h2>{heading}</h2>
        <p>{description}</p>
        {exploreLink && (
          <a href={exploreLink} target="_blank" rel="noreferrer">
            {exploreLabel}
          </a>
        )}
      </div>

      <div className="video-grid">
        {items.map((item) => (
          <article className="video-card" key={item.title}>
            <div className="video-card__image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="video-card__content">
              {item.tag && <span className="video-card__tag">{item.tag}</span>}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                Ver en YouTube
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
