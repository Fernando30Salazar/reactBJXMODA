import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import Loader from '../../components/Loader';
import { adminData } from '../../data/sites';
import { useAuth } from '../../hooks/useAuth';

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return; // previene doble envío

    setLoading(true);
    setError('');

    const result = await login(username, password);

    setLoading(false);

    if (result.ok) {
      navigate('/admin/registros', { replace: true });
    } else {
      setError(result.message || 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <AdminLayout>
      <section className="admin-login">
        <div className="admin-login__card">
          <div className="admin-login__logo">
            <img src={adminData.logo} alt="BJXMODA" />
          </div>

          <div className="admin-login__header">
            <h1>Panel Administrativo</h1>
            <p>Acceso exclusivo</p>
          </div>

          <form className="admin-login__form" onSubmit={handleSubmit} noValidate>
            <div className="admin-login__group">
              <label htmlFor="user">Usuario</label>
              <input
                type="text"
                id="user"
                autoComplete="off"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="admin-login__group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="admin-login__submit" disabled={loading}>
              {loading ? <Loader /> : 'Iniciar Sesión'}
            </button>

            {error && <p className="admin-login__error">{error}</p>}
          </form>
        </div>
      </section>
    </AdminLayout>
  );
}
