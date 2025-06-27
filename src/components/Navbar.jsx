import React from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ darkMode, handleThemeToggle, isMenuOpen, toggleMenu, closeMenu }) => {
  return (
    <nav className="fixed w-full z-50 bg-white/70 dark:bg-gray-900/80 shadow-xl backdrop-blur-xl border-b border-blue-200/30 dark:border-pink-200/10 transition-colors animate-navbar-fade">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <a
          href="#"
          className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg hover:scale-110 hover:rotate-1 transition-transform duration-300 animate-shimmer"
        >
          Ankit Kumar
        </a>
        {/* Theme Toggle */}
        <div className="flex items-center gap-6">
          <button
            onClick={handleThemeToggle}
            className="flex items-center gap-1 text-gray-700 dark:text-white hover:scale-110 transition-transform duration-300 focus:outline-none relative group"
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-60 blur-md animate-theme-glow" />
              {darkMode ? <FaMoon className="text-lg animate-theme-icon" /> : <FaSun className="text-lg animate-theme-icon" />}
            </span>
            <span className="text-sm font-semibold animate-fadeInUp" style={{animationDelay: '0.1s'}}>{darkMode ? 'Dark' : 'Light'}</span>
          </button>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="relative text-lg font-semibold text-gray-800 dark:text-white px-2 py-1 transition-all duration-300 group hover:text-pink-500 dark:hover:text-blue-400 focus:outline-none"
            >
              <span className="relative z-10 animate-fadeInUp" style={{animationDelay: `${0.12 + idx * 0.08}s`}}>{item.label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full group-focus:w-full animate-underline" />
            </a>
          ))}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-700 dark:text-white text-2xl focus:outline-none hover:scale-110 transition-transform duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 pt-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-blue-200/30 dark:border-pink-200/10 animate-mobile-slide">
          {navLinks.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="text-lg text-gray-800 dark:text-white font-semibold hover:text-pink-500 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 animate-fadeInUp"
              style={{animationDelay: `${0.15 + idx * 0.09}s`}}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
      {/* Animations */}
      <style>{`
        @keyframes navbar-fade {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-navbar-fade {
          animation: navbar-fade 0.7s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(24px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }
        @keyframes theme-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-theme-glow {
          animation: theme-glow 2s ease-in-out infinite;
        }
        @keyframes theme-icon {
          0% { transform: scale(0.8) rotate(-10deg); }
          100% { transform: scale(1) rotate(0); }
        }
        .animate-theme-icon {
          animation: theme-icon 0.5s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes mobile-slide {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-mobile-slide {
          animation: mobile-slide 0.5s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes underline {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-underline {
          animation: underline 0.4s cubic-bezier(.39,.575,.565,1) both;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
