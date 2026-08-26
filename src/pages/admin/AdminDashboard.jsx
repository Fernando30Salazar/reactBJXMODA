import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import Sidebar from '../../components/admin/Sidebar';
import SearchBar from '../../components/admin/SearchBar';
import DataTable from '../../components/admin/DataTable';
import PageLoader from '../../components/PageLoader';
import AlertMessage from '../../components/AlertMessage';
import { adminData } from '../../data/sites';
import { useAuth } from '../../hooks/useAuth';
import { fetchRegistros } from '../../services/googleSheets';
import { getToken } from '../../services/auth';

function toCsv(rows, extraLabel) {
  const headers = ['Nombre', 'Apellidos', extraLabel, 'Telefono', 'Correo', 'Fecha'];
  const lines = rows.map((r) =>
    [r.nombre, `${r.apellido_paterno || ''} ${r.apellido_materno || ''}`, r.extra, r.telefono, r.correo, r.fecha]
      .map((v) => `"${(v ?? '').toString().replace(/"/g, '""')}"`)
      .join(',')
  );
  return [headers.join(','), ...lines].join('\n');
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [activeBoard, setActiveBoard] = useState(adminData.boards[0].key);
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const currentBoard = useMemo(
    () => adminData.boards.find((b) => b.key === activeBoard) || adminData.boards[0],
    [activeBoard]
  );

  const loadRegistros = useCallback(async (boardKey) => {
    setLoading(true);
    setError('');
    const board = adminData.boards.find((b) => b.key === boardKey);
    const token = getToken();
    const result = await fetchRegistros(board.project, token);

    if (!result.ok) {
      setError(result.message || 'No se pudieron cargar los registros.');
      setRows([]);
    } else {
      setRows(result.data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadRegistros(activeBoard);
  }, [activeBoard, loadRegistros]);

  const filteredRows = useMemo(() => {
    if (!search.trim()) return rows;
    const value = search.toLowerCase();
    return rows.filter((r) =>
      [r.nombre, r.apellido_paterno, r.apellido_materno, r.correo, r.telefono]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(value))
    );
  }, [rows, search]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  const handleExport = () => {
    if (!filteredRows.length) return;
    const csv = toCsv(filteredRows, currentBoard.extraLabel);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${currentBoard.project}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AdminLayout>
      <Sidebar activeBoard={activeBoard} onSelectBoard={setActiveBoard} onLogout={handleLogout} />

      <main className="admin-content">
        <header className="admin-header">
          <h1>{currentBoard.label}</h1>
          <p>Gestión de registros</p>
        </header>

        <section className="admin-actions">
          <SearchBar value={search} onChange={setSearch} />
          <div>
            <button className="admin-btn-export" onClick={handleExport} disabled={!filteredRows.length}>
              Exportar Excel
            </button>
          </div>
        </section>

        {error && <AlertMessage type="error">{error}</AlertMessage>}

        {loading ? <PageLoader /> : <DataTable rows={filteredRows} extraLabel={currentBoard.extraLabel} />}
      </main>
    </AdminLayout>
  );
}
