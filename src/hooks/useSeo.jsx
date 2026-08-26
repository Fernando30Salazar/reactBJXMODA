import { useEffect } from 'react';

/**
 * Componente ligero para SEO por página, sin depender de
 * react-helmet (evita añadir una librería innecesaria).
 * Actualiza <title>, meta description, Open Graph y Twitter Card.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} [props.image]
 */
export function Helmet({ title, description, image }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const setMeta = (selector, attr, value) => {
      if (!value) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [, attrName, attrValue] = selector.match(/\[(\w+)="([^"]+)"\]/) || [];
        if (attrName && attrValue) el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    if (title) {
      setMeta('meta[property="og:title"]', 'content', title);
      setMeta('meta[name="twitter:title"]', 'content', title);
    }

    if (image) {
      setMeta('meta[property="og:image"]', 'content', image);
      setMeta('meta[name="twitter:image"]', 'content', image);
    }

    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
  }, [title, description, image]);

  return null;
}
