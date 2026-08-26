import { adminData } from '../../data/sites';

/**
 * Sidebar del panel admin: navegación entre las 4 hojas de registros
 * y botón de cerrar sesión.
 */
export default function Sidebar({ activeBoard, onSelectBoard, onLogout }) {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__logo">
        <img src={adminData.logo} alt="BJXMODA" />
      </div>

      <nav className="admin-sidebar__menu">
        {adminData.boards.map((board) => (
          <button
            key={board.key}
            className={`admin-sidebar__item${activeBoard === board.key ? ' admin-sidebar__item--active' : ''}`}
            onClick={() => onSelectBoard(board.key)}
          >
            {board.label}
          </button>
        ))}
      </nav>

      <div className="admin-sidebar__footer">
        <button className="admin-sidebar__logout" onClick={onLogout}>
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
