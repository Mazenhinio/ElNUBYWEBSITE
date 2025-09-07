import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { preloadCriticalImages } from './utils/performance';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));

// Optimized loading component
const LoadingSpinner = React.memo(() => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#ED8722] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600 font-medium">Loading...</p>
    </div>
  </div>
));

// Global styles moved to CSS for better performance
const globalStyles = `
  body, html {
    margin: 0;
    font-family: 'Cairo', 'Segoe UI', Arial, sans-serif;
    background: #f8f9fa;
    color: #222;
    overflow-x: hidden;
  }
  
  [dir="rtl"] {
    direction: rtl;
  }
  
  [dir="ltr"] {
    direction: ltr;
  }
`;

// Inject global styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

function App() {
  const { i18n } = useTranslation();
  
  // Set direction attribute for RTL support
  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  // Preload critical images on app start
  useEffect(() => {
    preloadCriticalImages();
  }, []);
  
  return (
    <DarkModeProvider>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </DarkModeProvider>
  );
}

export default App; 