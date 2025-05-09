import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProfilePage from './pages/ProfilePage';
import PosterPreviewPage from './pages/PosterPreviewPage';
import SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:category" element={<CategoriesPage />} /> 
          <Route path="poster/:id" element={<PosterPreviewPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="subscription" element={<SubscriptionPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;