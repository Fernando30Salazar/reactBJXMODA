/**
 * =============================================================
 * BJXMODA — Backend en Google Apps Script
 * =============================================================
 * Este script reemplaza a Supabase como backend del proyecto.
 * Se despliega como "Aplicación web" y React le habla por fetch()
 * a la URL resultante (VITE_APPS_SCRIPT_URL).
 *
 * RESPONSABILIDADES:
 *  1. Recibir los 4 formularios públicos y guardarlos en la hoja
 *     de Google Sheets correspondiente ("submitForm").
 *  2. Autenticar al administrador contra credenciales guardadas
 *     en Script Properties, nunca en el frontend ("login").
 *  3. Emitir y validar tokens de sesión de corta duración
 *     ("verifyToken").
 *  4. Servir los registros guardados al panel admin, solo si el
 *     token es válido ("getRegistros").
 *
 * CONFIGURACIÓN INICIAL (una sola vez):
 *  1. Crea un Google Sheet con 4 hojas llamadas exactamente:
 *     "bjxmoda", "cedice", "kiu_models", "leon_fashion"
 *     Cada una con encabezados en la fila 1:
 *     nombre | apellido_paterno | apellido_materno | extra | telefono | correo | fecha
 *     (la columna "extra" guarda colaborador/area_interes/ciudad_residencia según el proyecto)
 *  2. Herramientas > Editor de secuencia de comandos > pega este archivo.
 *  3. Configura Script Properties (Configuración del proyecto > Propiedades
 *     del script > Añadir propiedad):
 *       ADMIN_USER     = tu_usuario_admin
 *       ADMIN_PASSWORD = una_contraseña_fuerte   (usa una contraseña real y única)
 *       SHEET_ID       = el ID de tu Google Sheet
 *     NUNCA escribas estos valores directamente en el código.
 *  4. Implementar > Nueva implementación > Aplicación web.
 *       - Ejecutar como: Yo (tu cuenta)
 *       - Quién tiene acceso: Cualquier usuario
 *  5. Copia la URL resultante en VITE_APPS_SCRIPT_URL (.env de React).
 * =============================================================
 */

const VALID_PROJECTS = ['bjxmoda', 'cedice', 'kiu_models', 'leon_fashion'];

// Duración de la sesión del token de administrador (en milisegundos).
const SESSION_DURATION_MS = 2 * 60 * 60 * 1000; // 2 horas

function doPost(e) {
  let payload;
  try {
    payload = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonResponse({ ok: false, message: 'Cuerpo de la petición inválido.' });
  }

  const action = payload.action;

  switch (action) {
    case 'submitForm':
      return handleSubmitForm(payload);
    case 'login':
      return handleLogin(payload);
    case 'verifyToken':
      return handleVerifyToken(payload);
    case 'getRegistros':
      return handleGetRegistros(payload);
    default:
      return jsonResponse({ ok: false, message: 'Acción no reconocida.' });
  }
}

/* =========================================================
   1. FORMULARIOS PÚBLICOS
========================================================= */

function handleSubmitForm(payload) {
  const project = payload.project;

  if (VALID_PROJECTS.indexOf(project) === -1) {
    return jsonResponse({ ok: false, message: 'Proyecto no válido.' });
  }

  // Validación mínima del lado servidor (nunca confiar solo en el frontend).
  if (!payload.nombre || !payload.correo || !payload.telefono) {
    return jsonResponse({ ok: false, message: 'Faltan campos obligatorios.' });
  }

  const sheet = getSheet(project);

  // Columna "extra" según el proyecto: colaborador / area_interes / ciudad_residencia.
  const extra = payload.colaborador || payload.area_interes || payload.ciudad_residencia || '';

  sheet.appendRow([
    payload.nombre || '',
    payload.apellido_paterno || '',
    payload.apellido_materno || '',
    extra,
    payload.telefono || '',
    payload.correo || '',
    new Date(),
  ]);

  return jsonResponse({ ok: true });
}

/* =========================================================
   2. LOGIN DE ADMINISTRADOR
========================================================= */

function handleLogin(payload) {
  const props = PropertiesService.getScriptProperties();
  const validUser = props.getProperty('ADMIN_USER');
  const validPassword = props.getProperty('ADMIN_PASSWORD');

  if (!validUser || !validPassword) {
    return jsonResponse({ ok: false, message: 'El backend no tiene configuradas las credenciales de administrador.' });
  }

  const username = (payload.username || '').trim().toLowerCase();
  const password = payload.password || '';

  if (username !== validUser.toLowerCase() || password !== validPassword) {
    return jsonResponse({ ok: false, message: 'Usuario o contraseña incorrectos.' });
  }

  const token = createSessionToken();
  return jsonResponse({ ok: true, token: token, expiresInMs: SESSION_DURATION_MS });
}

function createSessionToken() {
  const token = Utilities.getUuid();
  const expiresAt = Date.now() + SESSION_DURATION_MS;

  // Guardamos el token en CacheService (rápido, expira solo).
  CacheService.getScriptCache().put('session_' + token, String(expiresAt), SESSION_DURATION_MS / 1000);

  return token;
}

/* =========================================================
   3. VERIFICACIÓN DE TOKEN
========================================================= */

function handleVerifyToken(payload) {
  const valid = isValidToken(payload.token);
  return jsonResponse({ ok: valid });
}

function isValidToken(token) {
  if (!token) return false;
  const cached = CacheService.getScriptCache().get('session_' + token);
  if (!cached) return false;
  return Date.now() < Number(cached);
}

/* =========================================================
   4. REGISTROS PARA EL PANEL ADMIN (requiere token válido)
========================================================= */

function handleGetRegistros(payload) {
  if (!isValidToken(payload.token)) {
    return jsonResponse({ ok: false, message: 'Sesión inválida o expirada. Inicia sesión de nuevo.' });
  }

  const project = payload.project;
  if (VALID_PROJECTS.indexOf(project) === -1) {
    return jsonResponse({ ok: false, message: 'Proyecto no válido.' });
  }

  const sheet = getSheet(project);
  const values = sheet.getDataRange().getValues();

  // La primera fila son encabezados.
  const rows = values.slice(1).map(function (row) {
    return {
      nombre: row[0],
      apellido_paterno: row[1],
      apellido_materno: row[2],
      extra: row[3],
      telefono: row[4],
      correo: row[5],
      fecha: row[6] instanceof Date ? row[6].toISOString() : row[6],
    };
  });

  // Más recientes primero.
  rows.reverse();

  return jsonResponse({ ok: true, data: rows });
}

/* =========================================================
   UTILIDADES
========================================================= */

function getSheet(project) {
  const sheetId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const sheet = spreadsheet.getSheetByName(project);

  if (!sheet) {
    throw new Error('No existe la hoja "' + project + '" en el Google Sheet configurado.');
  }

  return sheet;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
