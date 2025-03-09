import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // More sensitive scroll detection for home page
      setScrolled(window.scrollY > (isHomePage ? 20 : 0));

      // Update active section based on scroll position
      const sections = ['home', 'about', 'courses', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Remove the padding effect as we'll handle it differently
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.paddingTop = isHomePage ? '0' : '80px';
    }
    return () => {
      if (mainContent) {
        mainContent.style.paddingTop = '0';
      }
    };
  }, [isHomePage]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact', isSpecial: true }
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-b from-blue-900/95 to-blue-950/95 backdrop-blur-md shadow-xl"
          : isHomePage
            ? "bg-transparent"
            : "bg-gradient-to-b from-blue-900/80 to-blue-950/80 backdrop-blur-sm"
      }`}
      style={{ 
        borderBottom: scrolled 
          ? '1px solid rgba(255, 255, 255, 0.1)' 
          : isHomePage 
            ? 'none'
            : '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <Link 
              to="/" 
              className="text-2xl font-bold text-white flex items-center space-x-2.5 transition-all duration-300 transform group-hover:scale-105"
            >
          
              <span className={`
                bg-clip-text text-transparent transition-all duration-300
                ${scrolled
                  ? "bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"
                  : "bg-gradient-to-r from-white to-blue-100"}
              `}>
                Knowledge Home
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium 
                    transition-all duration-300 relative
                    ${activeSection === item.id 
                      ? 'text-white' + (item.isSpecial ? ' bg-blue-600 shadow-lg shadow-blue-500/20' : ' bg-blue-800/40')
                      : 'text-gray-300 hover:text-white ' + 
                        (item.isSpecial 
                          ? 'hover:bg-blue-600 bg-blue-600/20' 
                          : 'hover:bg-blue-800/30')}
                    ${!scrolled && isHomePage ? 'hover:bg-white/10' : ''}
                  `}
                >
                  {item.label}
                  {activeSection === item.id && !item.isSpecial && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                inline-flex items-center justify-center p-2 rounded-lg
                transition-all duration-300
                ${isOpen 
                  ? 'bg-blue-800/40 text-white rotate-180' 
                  : 'text-gray-300 hover:text-white hover:bg-blue-800/30'}
                ${!scrolled && isHomePage ? 'hover:bg-white/10' : ''}
              `}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`
          md:hidden transition-all duration-300 transform
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        `}
      >
        <div className={`
          px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md border-b
          ${scrolled
            ? "bg-gradient-to-b from-blue-900/95 to-blue-950/95 border-blue-800/50"
            : "bg-gradient-to-b from-blue-900/90 to-blue-950/90 border-blue-800/30"}
        `}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                block w-full text-left px-4 py-3 rounded-lg text-base font-medium
                transition-all duration-300 relative overflow-hidden
                ${activeSection === item.id 
                  ? 'text-white' + (item.isSpecial ? ' bg-blue-600 shadow-lg shadow-blue-500/20' : ' bg-blue-800/40')
                  : 'text-gray-300 hover:text-white ' + 
                    (item.isSpecial 
                      ? 'hover:bg-blue-600 bg-blue-600/20' 
                      : 'hover:bg-blue-800/30')}
                ${!scrolled && isHomePage ? 'hover:bg-white/10' : ''}
              `}
            >
              {item.label}
              {activeSection === item.id && !item.isSpecial && (
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-r-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
