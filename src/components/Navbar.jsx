import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const location = useLocation();

  const isGuideDetail = location.pathname.startsWith('/guides/') && location.pathname !== '/guides';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 25);

      if (isGuideDetail) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
          const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
          setReadingProgress(progress);
        }
      } else {
        setReadingProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isGuideDetail]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Care Guides', path: '/guides' },
    { name: 'Troubleshooter', path: '/how-to-use' },
    { name: 'About Kerrie', path: '/about' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b transition-all duration-300 ${
      isScrolled ? 'border-[#D9CEBF] shadow-xs' : 'border-[#E8E2D8]'
    }`}>
      
      {/* Top Welcome Strip */}
      <div className={`bg-[#84431B] text-xs text-[#FAF2E8] py-1.5 px-4 text-center border-b border-[#6E3614] flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 py-0 opacity-0 border-transparent' : 'max-h-10 opacity-100'
      }`}>
        <span className="w-2 h-2 rounded-full bg-[#F3BA79] animate-pulse" />
        <span className="font-medium tracking-wide">Kerrie Escobar • The Handcrafted Wicker &amp; Rattan Care Journal</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          
          {/* Logo & Persona */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
              <img
                src="/logo.png?v=3"
                alt="Kerrie Escobar Logo"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#24201D] group-hover:text-[#B87538] transition-colors block">
                Kerrie Escobar
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#8A837A] tracking-wider uppercase font-medium block">
                Wicker &amp; Rattan Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    active
                      ? 'text-[#B87538] font-semibold'
                      : 'text-[#645E57] hover:text-[#24201D]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B87538] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Problem Solver Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/how-to-use"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#B87538] text-white hover:bg-[#965B27] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all text-xs font-semibold shadow-xs"
            >
              <span>Diagnose an Issue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/how-to-use"
              className="px-3 py-1.5 rounded-md bg-[#B87538] text-white text-xs font-semibold"
            >
              Diagnose
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#645E57] hover:text-[#24201D] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Reading Progress Indicator (Only on article detail pages) */}
      {isGuideDetail && (
        <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E8E2D8] overflow-hidden">
          <div
            className="h-full bg-[#B87538] transition-all duration-150 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}

      {/* Mobile Drawer */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-[#FAF7F2] border-b border-[#E8E2D8] ${
        isOpen ? 'max-h-96 opacity-100 py-6 px-6 space-y-3' : 'max-h-0 opacity-0 py-0 px-6'
      }`}>
        {navLinks.map((link) => {
          const active = isActive(link.path);
          return (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-base font-medium transition-colors ${
                active ? 'text-[#B87538] font-bold' : 'text-[#645E57] hover:text-[#24201D]'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <div className="pt-4 border-t border-[#E8E2D8]">
          <Link
            to="/how-to-use"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-3 rounded-lg bg-[#B87538] text-white text-sm font-semibold hover:bg-[#965B27] transition-colors"
          >
            Wicker Care Troubleshooter
          </Link>
        </div>
      </div>
    </header>
  );
}
