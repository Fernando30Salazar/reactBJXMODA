// =============================================================
// SERVICIO: Autenticación del panel administrativo
// =============================================================
// IMPORTANTE — modelo de seguridad:
// - Ninguna contraseña ni usuario válido vive en este archivo
//   ni en ningún otro archivo de React.
// - El login se valida en Google Apps Script contra
//   "Script Properties" (secretos guardados del lado servidor).
// - Apps Script responde con un token de sesión de corta
//   duración (no la contraseña, no un simple "true").
// - Ese token se guarda en memoria + sessionStorage (para
//   sobrevivir refresh) y se reenvía en cada petición protegida.
// - Cada petición protegida es revalidada en el servidor
//   (Apps Script comprueba que el token exista y no haya
//   expirado antes de devolver datos). El frontend NUNCA decide
//   por sí solo si el usuario está autenticado "de verdad": solo
//   confía en la última respuesta confirmada del servidor.
// =============================================================

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
const SESSION_KEY = 'bjxmoda_admin_session';

function saveSession(token, expiresAt) {
  const session = { token, expiresAt };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function getStoredSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (!session?.token || !session?.expiresAt) return null;
    if (Date.now() > session.expiresAt) {
      clearSession();
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}

/**
 * Intenta iniciar sesión contra Apps Script.
 * @param {string} username
 * @param {string} password
 * @returns {Promise<{ok: boolean, message?: string}>}
 */
export async function login(username, password) {
  if (!APPS_SCRIPT_URL) {
    return {
      ok: false,
      message: 'El backend de autenticación no está configurado (VITE_APPS_SCRIPT_URL).',
    };
  }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'login',
        username: username.trim().toLowerCase(),
        password,
      }),
    });

    const result = await response.json();

    if (!result.ok || !result.token) {
      return { ok: false, message: result.message || 'Usuario o contraseña incorrectos.' };
    }

    // El servidor decide la duración de la sesión (por defecto 2h si no la manda).
    const expiresAt = Date.now() + (result.expiresInMs || 2 * 60 * 60 * 1000);
    saveSession(result.token, expiresAt);

    return { ok: true };
  } catch (error) {
    console.error('Error de login:', error);
    return { ok: false, message: 'Error de conexión. Inténtalo de nuevo.' };
  }
}

/**
 * Revalida la sesión actual contra el servidor.
 * Se usa al montar rutas protegidas: nunca confiamos solo en
 * que exista un token localmente, confirmamos que siga siendo
 * válido en Apps Script.
 */
export async function verifySession() {
  const session = getStoredSession();
  if (!session) return false;

  if (!APPS_SCRIPT_URL) return false;

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'verifyToken',
        token: session.token,
      }),
    });

    const result = await response.json();
    if (!result.ok) {
      clearSession();
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error verificando la sesión:', error);
    return false;
  }
}

export function logout() {
  clearSession();
}

export function getToken() {
  return getStoredSession()?.token || null;
}
