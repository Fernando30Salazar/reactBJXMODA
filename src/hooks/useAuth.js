import { useCallback, useEffect, useState } from 'react';
import { verifySession, getToken, login as loginService, logout as logoutService } from '../services/auth';

/**
 * Hook central de autenticación del panel admin.
 * Expone el estado de sesión y las acciones login/logout,
 * revalidando siempre contra el backend (Apps Script).
 */
export function useAuth() {
  const [status, setStatus] = useState('checking'); // 'checking' | 'authenticated' | 'unauthenticated'

  const checkSession = useCallback(async () => {
    setStatus('checking');
    const token = getToken();
    if (!token) {
      setStatus('unauthenticated');
      return;
    }
    const valid = await verifySession();
    setStatus(valid ? 'authenticated' : 'unauthenticated');
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const login = useCallback(async (username, password) => {
    const result = await loginService(username, password);
    if (result.ok) {
      setStatus('authenticated');
    }
    return result;
  }, []);

  const logout = useCallback(() => {
    logoutService();
    setStatus('unauthenticated');
  }, []);

  return { status, login, logout, refresh: checkSession };
}
