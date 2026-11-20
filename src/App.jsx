import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

// Pages
import HomePage from './pages/HomePage';
import BlogListingPage from './pages/BlogListingPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import HowToUsePage from './pages/HowToUsePage';
import FaqsPage from './pages/FaqsPage';
import ContactPage from './pages/ContactPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  const location = useLocation();

  // Keep individual guide/blog reading pages calm, quiet, and light for comfortable long-form reading
  const isArticleDetail = (location.pathname.startsWith('/guides/') && location.pathname !== '/guides') ||
                          (location.pathname.startsWith('/blog/') && location.pathname !== '/blog');

  return (
    <div className={`min-h-screen text-[#24201D] flex flex-col font-sans selection:bg-[#B87538] selection:text-white relative transition-colors duration-500 ${
      isArticleDetail ? 'bg-[#FAF7F2]' : 'bg-[#F5ECE0]'
    }`}>
      
      {/* Tactile Woven Rattan Cane Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {isArticleDetail ? (
          /* Clean, quiet, high-contrast reading environment for individual article pages */
          <>
            <div 
              className="absolute inset-0 opacity-[0.035] bg-repeat"
              style={{ 
                backgroundImage: "url('/cane-pattern.svg')", 
                backgroundSize: '54px 54px' 
              }} 
            />
            <div 
              className="absolute inset-0 opacity-[0.025] mix-blend-multiply bg-cover bg-center filter blur-[1.5px] scale-105"
              style={{ 
                backgroundImage: "url('/rattan-bg.jpg')" 
              }} 
            />
            <div className="absolute inset-0 bg-radial from-transparent via-[#FAF7F2]/60 to-[#FAF7F2]/90" />
          </>
        ) : (
          /* Rich, 2x bolder, warm honey-amber colored woven rattan background for main website */
          <>
            {/* Warm Honey Rattan Ambient Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8F1E7] via-[#F3E6D2] to-[#ECDBC2] opacity-85" />

            {/* Authentic English 7-Step Vienna Cane Webbing Lattice - 2x Bolder with Amber Strands */}
            <div 
              className="absolute inset-0 opacity-[0.16] bg-repeat transition-opacity duration-500"
              style={{ 
                backgroundImage: "url('/cane-pattern.svg')", 
                backgroundSize: '54px 54px' 
              }} 
            />

            {/* Sun-Cured Organic Rattan Fiber Texture with Breathing Motion & Warm Honey Saturation */}
            <div 
              className="absolute inset-0 opacity-[0.11] mix-blend-multiply bg-cover bg-center filter sepia-[0.35] saturate-[1.6] blur-[0.8px] scale-105 animate-pulse-slow"
              style={{ 
                backgroundImage: "url('/rattan-bg.jpg')" 
              }} 
            />

            {/* Soft Warm Golden Amber Vignette Lighting */}
            <div className="absolute inset-0 bg-radial from-transparent via-[#F7EDE0]/30 to-[#E8D4BC]/70" />
          </>
        )}
      </div>

      <Navbar />

      <main key={location.pathname} className="flex-1 animate-fade-in relative z-10">
        <Routes location={location}>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Care Guides & Articles */}
          <Route path="/guides" element={<BlogListingPage />} />
          <Route path="/blog" element={<Navigate to="/guides" replace />} />
          <Route path="/articles" element={<Navigate to="/guides" replace />} />
          <Route path="/guides/:slug" element={<BlogPostPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* Entity Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Trust, Safety & Legal */}
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />

          {/* 404 Catch All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
