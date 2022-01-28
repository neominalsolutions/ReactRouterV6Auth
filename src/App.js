import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './store/contexts/AuthContext';
import { Routes, Route, Link } from 'react-router-dom';
import { RequireAuth } from './auth/RequireAuth';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout';
import { Outlet } from 'react-router';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div style={{ padding: '10px' }}>
      <AuthProvider>
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="users" element={<UsersPage />} />  public olan sayfaları yukarıdaki gibi dışarıda bırakıyoruz */}
          <Route path="/" element={
            <RequireAuth>
              <Layout />
            </RequireAuth>} >
            <Route path="users" element={<UsersPage />} />
          </Route>

        </Routes>
        <Outlet />
      </AuthProvider>
    </div>
  );
}

// yukarıdaki gibi layout RequireAuth ile sardık artık layout içerisinde ulaşacağımız routeları ise / path altına toplayarak onlarında RequireAuth ile protected resource olmasını sağlıyoruz.

export default App;
