// =============================================================
// SERVICIO: Google Sheets (vía Google Apps Script)
// =============================================================
// Todos los formularios del sitio pasan por aquí. Ninguna
// credencial vive en este archivo: el único dato es la URL
// pública del Web App de Apps Script (VITE_APPS_SCRIPT_URL),
// que actúa como intermediario hacia Google Sheets.
//
// El propio Apps Script (ver /google-apps-script/Code.gs) valida
// los datos y decide en qué hoja los guarda según "project".
// =============================================================

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

/**
 * Envía un registro de formulario al backend (Apps Script).
 * @param {string} project - identificador del sitio ("bjxmoda", "cedice", "kiu_models", "leon_fashion")
 * @param {Object} data - campos del formulario
 * @returns {Promise<{ok: boolean, message?: string}>}
 */
export async function submitForm(project, data) {
  if (!APPS_SCRIPT_URL) {
    console.error(
      'VITE_APPS_SCRIPT_URL no está configurada. Revisa tu archivo .env (ver .env.example).'
    );
    return { ok: false, message: 'El formulario no está configurado correctamente. Contacta al administrador.' };
  }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      // Apps Script Web Apps no soportan preflight CORS con headers
      // personalizados de forma sencilla; text/plain evita el preflight
      // y el propio script parsea el JSON del body.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'submitForm',
        project,
        ...data,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }

    const result = await response.json();

    if (!result.ok) {
      return { ok: false, message: result.message || 'No se pudo guardar el registro.' };
    }

    return { ok: true };
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    return {
      ok: false,
      message: 'Ocurrió un error de conexión. Verifica tu internet e inténtalo de nuevo.',
    };
  }
}

/**
 * Obtiene los registros de una hoja (usado por el panel admin).
 * Requiere un token de sesión válido (ver services/auth.js).
 * @param {string} project
 * @param {string} token
 */
export async function fetchRegistros(project, token) {
  if (!APPS_SCRIPT_URL) {
    return { ok: false, message: 'El backend no está configurado.', data: [] };
  }

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'getRegistros',
        project,
        token,
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      return { ok: false, message: result.message || 'No se pudieron cargar los registros.', data: [] };
    }

    return { ok: true, data: result.data || [] };
  } catch (error) {
    console.error('Error al cargar registros:', error);
    return { ok: false, message: 'Error de conexión al cargar los registros.', data: [] };
  }
}
