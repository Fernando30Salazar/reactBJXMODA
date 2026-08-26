import SiteLayout from '../layouts/SiteLayout';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import RegistrationForm from '../components/RegistrationForm';
import { sites } from '../data/sites';

export default function KiuModels() {
  const site = sites.kiuModels;

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

      <section className="talents">
        <div className="talents__title">
          <h2>{site.talents.heading}</h2>
          <p>{site.talents.description}</p>
        </div>

        <div className="talents__grid">
          {site.talents.items.map((talent) => (
            <div className="talent-card" key={talent.name}>
              <img src={talent.image} alt={talent.name} loading="lazy" />
              <div className="talent-card__overlay">
                <h3>{talent.name}</h3>
                <span>
                  <em>Instagram: {talent.instagram}</em>
                </span>
              </div>
            </div>
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
