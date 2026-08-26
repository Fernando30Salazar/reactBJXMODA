import { footerData } from '../data/sites';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src={footerData.logo} alt="BJXMODA" />
        <h3>{footerData.tagline}</h3>
      </div>

      <div className="footer__copy">
        <p>{footerData.copyright}</p>
      </div>

      <div className="footer__socials">
        {footerData.socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
            <i className={`fab ${social.icon}`}></i>
          </a>
        ))}
      </div>
    </footer>
  );
}
