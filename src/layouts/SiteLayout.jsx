import { Helmet } from '../hooks/useSeo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Layout compartido por las 4 páginas públicas: navbar + contenido + footer,
 * con metadatos SEO (title, description) configurados por marca.
 */
export default function SiteLayout({ site, children }) {
  return (
    <>
      <Helmet title={site.seo?.title || site.title} description={site.seo?.description} />
      <Navbar logo={site.logoDark || site.logoLight} homeTo={site.id === 'bjxmoda' ? '/' : `/${site.id}`} />
      {children}
      <Footer />
    </>
  );
}
