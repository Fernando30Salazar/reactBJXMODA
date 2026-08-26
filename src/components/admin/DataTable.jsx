import EmptyState from '../EmptyState';

/**
 * Tabla de registros reutilizable para las 4 hojas del panel admin.
 * @param {Object} props
 * @param {Array<Object>} props.rows
 * @param {string} props.extraLabel - encabezado de la columna variable (colaborador/área/ciudad)
 */
export default function DataTable({ rows, extraLabel }) {
  if (!rows || rows.length === 0) {
    return (
      <div className="admin-table-container">
        <EmptyState title="No hay registros" description="Todavía no se ha recibido ningún registro para esta marca." />
      </div>
    );
  }

  return (
    <div className="admin-table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>{extraLabel}</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Fecha Registro</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.id || i}>
              <td>{row.nombre || ''}</td>
              <td>{`${row.apellido_paterno || ''} ${row.apellido_materno || ''}`}</td>
              <td>{row.extra || '-'}</td>
              <td>{row.telefono || ''}</td>
              <td>{row.correo || ''}</td>
              <td>{row.fecha ? new Date(row.fecha).toLocaleString() : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
