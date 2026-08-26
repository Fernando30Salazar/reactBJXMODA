import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PageLoader from './PageLoader';

/**
 * Protege rutas administrativas. No confía en un simple flag
 * de localStorage: usa useAuth(), que revalida el token contra
 * el backend (Apps Script) antes de decidir si deja pasar.
 */
export default function ProtectedRoute({ children }) {
  const { status } = useAuth();

  if (status === 'checking') {
    return <PageLoader />;
  }

  if (status === 'unauthenticated') {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
