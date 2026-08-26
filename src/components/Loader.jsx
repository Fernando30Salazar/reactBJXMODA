export default function Loader({ dark = false }) {
  return <span className={`loader${dark ? ' loader--dark' : ''}`} role="status" aria-label="Cargando" />;
}
