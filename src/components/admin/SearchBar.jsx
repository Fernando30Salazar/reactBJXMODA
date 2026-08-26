export default function SearchBar({ value, onChange, placeholder = 'Buscar por nombre, correo o teléfono...' }) {
  return (
    <div className="admin-search">
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}
