import SiteLayout from '../layouts/SiteLayout';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import VideoGrid from '../components/VideoGrid';
import RegistrationForm from '../components/RegistrationForm';
import { sites } from '../data/sites';

export default function Home() {
  const site = sites.bjxmoda;

  return (
    <SiteLayout site={site}>
      <Carousel groups={site.carouselGroups} logo={site.carouselLogo} />

      <AboutSection
        variant={site.about.variant}
        image={site.about.image}
        imageAlt={site.about.imageAlt}
        title={site.about.title}
        leadText={site.about.paragraphs[0]}
        highlight={site.about.highlight}
        afterHighlight={site.about.afterHighlight}
        highlight2={site.about.highlight2}
        afterHighlight2={site.about.afterHighlight2}
        link={site.about.link}
        linkLabel={site.about.linkLabel}
      />

      <VideoGrid
        heading={site.videoSection.heading}
        description={site.videoSection.description}
        exploreLink={site.videoSection.exploreLink}
        exploreLabel={site.videoSection.exploreLabel}
        items={site.videoSection.items}
      />

      <section id="socios" className="partners">
        <div className="partners__header">
          <h2>{site.partners.heading}</h2>
          <p>{site.partners.description}</p>
          <a href={site.partners.directoryLink} target="_blank" rel="noreferrer">
            {site.partners.directoryLabel}
          </a>
        </div>

        <div className="partners__grid">
          {site.partners.items.map((partner) => (
            <article className={`partner-card${partner.reverse ? ' partner-card--reverse' : ''}`} key={partner.name}>
              <div className="partner-card__image">
                <img src={partner.image} alt={partner.imageAlt} />
                <h3>{partner.name}</h3>
              </div>
              <div className="partner-card__content">
                <div className="partner-card__tags">
                  {partner.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p>{partner.description}</p>
                <div className="partner-card__footer">
                  <div>
                    <small>{partner.smallLabel}</small>
                    <h4>{partner.footerName}</h4>
                  </div>
                  <a href={partner.link} target="_blank" rel="noreferrer">
                    Explorar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <RegistrationForm
        project={site.project}
        variant={site.form.variant}
        heading={site.form.heading}
        description={site.form.description}
        highlight={site.form.highlight}
        image={site.form.image}
        imageAlt={site.form.imageAlt}
        logo={site.form.logo}
        submitLabel={site.form.submitLabel}
        extraField={site.form.extraField}
      />
    </SiteLayout>
  );
}
