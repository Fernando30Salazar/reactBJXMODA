import SiteLayout from '../layouts/SiteLayout';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import RegistrationForm from '../components/RegistrationForm';
import { sites } from '../data/sites';

export default function Cedice() {
  const site = sites.cedice;

  return (
    <SiteLayout site={site}>
      <Carousel groups={site.carouselGroups} logo={site.carouselLogo} />

      <AboutSection
        variant={site.about.variant}
        image={site.about.image}
        imageAlt={site.about.imageAlt}
        imageTag={site.about.imageTag}
        title={site.about.title}
        highlight={site.about.highlight}
        afterHighlight={site.about.afterHighlight}
        link={site.about.link}
        linkLabel={site.about.linkLabel}
      />

      <section className="services">
        <div className="services__title">
          <h2>{site.services.heading}</h2>
          <p>{site.services.description}</p>
        </div>

        <div className="services__grid">
          {site.services.items.map((item) => (
            <article className="service-card" key={item.title}>
              <div className="service-card__image">
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
              </div>
              <div className="service-card__content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  Redes Sociales
                </a>
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
        image={site.form.image}
        imageAlt={site.form.imageAlt}
        logoText={site.form.logoText}
        submitLabel={site.form.submitLabel}
        extraField={site.form.extraField}
      />
    </SiteLayout>
  );
}
