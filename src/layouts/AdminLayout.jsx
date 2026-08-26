import { Helmet } from '../hooks/useSeo';

export default function AdminLayout({ children }) {
  return (
    <>
      <Helmet title="Panel Administrativo | BJXMODA" />
      <div className="admin-dashboard">{children}</div>
    </>
  );
}
