/**
 * Botón reutilizable. Renderiza <a> si recibe "href", si no <button>.
 */
export default function Button({ href, variant, small, children, ...rest }) {
  const className = ['btn', variant === 'outline' && 'btn--outline', small && 'btn--small']
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
