import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Landing from './pages/Landing.jsx';
import ModePlaceholder from './pages/ModePlaceholder.jsx';

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const elementId = location.hash.replace('#', '');
      requestAnimationFrame(() => document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' }));
    } else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);
  return null;
}

export default function App() {
  return <><ScrollManager/><Header/><Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/problems" element={<ModePlaceholder modeId="pvp"/>}/>
    <Route path="/ai-challenge" element={<ModePlaceholder modeId="solo"/>}/>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes><Footer/></>;
}
