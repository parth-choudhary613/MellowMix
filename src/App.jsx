// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}
