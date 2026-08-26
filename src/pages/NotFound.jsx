import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '3rem' }}>404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="btn">
        Volver al inicio
      </Link>
    </div>
  );
}
