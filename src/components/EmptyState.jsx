export default function EmptyState({ title = 'No hay registros', description }) {
  return (
    <div className="empty-state">
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </div>
  );
}
