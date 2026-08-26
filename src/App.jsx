import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cedice from './pages/Cedice';
import KiuModels from './pages/KiuModels';
import LeonFashion from './pages/LeonFashion';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cedice" element={<Cedice />} />
        <Route path="/kiu-models" element={<KiuModels />} />
        <Route path="/leon-fashion" element={<LeonFashion />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/registros"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
