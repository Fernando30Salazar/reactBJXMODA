import SiteLayout from '../layouts/SiteLayout';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import VideoGrid from '../components/VideoGrid';
import RegistrationForm from '../components/RegistrationForm';
import { sites } from '../data/sites';

export default function LeonFashion() {
  const site = sites.leonFashion;

  return (
    <SiteLayout site={site}>
      <Carousel groups={site.carouselGroups} logo={site.carouselLogo} />

      <AboutSection
        variant={site.about.variant}
        image={site.about.image}
        imageAlt={site.about.imageAlt}
        imageTag={site.about.imageTag}
        title={site.about.title}
        afterHighlight={site.about.afterHighlight}
        link={site.about.link}
        linkLabel={site.about.linkLabel}
      />

      <section className="editions">
        <div className="editions__title">
          <h2>{site.editions.heading}</h2>
          <p>{site.editions.description}</p>
        </div>

        {site.editions.rows.map((row) => (
          <div className="edition-row" key={row.label}>
            <h3>{row.label}</h3>
            <div className="edition-row__grid">
              {row.images.map((src, i) => (
                <img key={i} src={src} alt="LFF" loading="lazy" />
              ))}
            </div>
          </div>
        ))}
      </section>

      <VideoGrid
        variant={site.videoSection.variant}
        heading={site.videoSection.heading}
        description={site.videoSection.description}
        exploreLink={site.videoSection.exploreLink}
        exploreLabel={site.videoSection.exploreLabel}
        items={site.videoSection.items}
      />

      <section className="filmfreeway-panel">
        <div className="filmfreeway-panel__content">
          <span>{site.filmfreeway.eyebrow}</span>
          <h2>{site.filmfreeway.heading}</h2>
          <p>{site.filmfreeway.description}</p>
          <a href={site.filmfreeway.link} target="_blank" rel="noreferrer">
            {site.filmfreeway.linkLabel}
          </a>
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
