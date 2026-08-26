import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/sites';

/**
 * Navbar reutilizable en las 4 marcas.
 * @param {Object} props
 * @param {string} props.logo - ruta del logo a mostrar
 * @param {string} props.homeTo - ruta a la que enlaza el logo
 * @param {Array<{to?: string, href?: string, label: string}>} [props.extraLinks]
 *   Enlaces adicionales de la propia página (ej. "#contacto").
 */
export default function Navbar({ logo, homeTo = '/', extraLinks = [] }) {
  return (
    <header className="navbar">
      <Link to={homeTo} className="navbar__logo-link">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </Link>
      <nav className="navbar__nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            {link.label}
          </NavLink>
        ))}
        {extraLinks.map((link) =>
          link.to ? (
            <Link key={link.label} to={link.to} className="navbar__link">
              {link.label}
            </Link>
          ) : (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          )
        )}
      </nav>
    </header>
  );
}
