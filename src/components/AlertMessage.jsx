/**
 * Mensaje de éxito/error reutilizable.
 * @param {Object} props
 * @param {'success'|'error'} props.type
 * @param {string} props.children
 */
export default function AlertMessage({ type = 'success', children }) {
  if (!children) return null;
  return (
    <div className={`alert alert--${type}`} role="status">
      {children}
    </div>
  );
}
