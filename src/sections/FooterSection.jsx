import React from 'react';

const FooterSection = () => (
  <footer className="w-full py-8 px-4 text-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-blue-900 dark:text-white shadow-inner backdrop-blur-md border-t border-blue-200/30 dark:border-pink-200/10 animate-fadeInUp">
    <div className="flex flex-wrap justify-center gap-8 mb-4">
      {[
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Work' },
        { href: '#contact', label: 'Contact' },
      ].map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="relative text-gray-700 dark:text-gray-300 font-semibold px-2 py-1 transition-all duration-300 rounded-lg hover:text-pink-500 hover:scale-110 focus:outline-none group"
        >
          {link.label}
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 group-hover:w-full group-focus:w-full rounded-full" />
        </a>
      ))}
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
      &copy; {new Date().getFullYear()} <span className="font-bold text-blue-700 dark:text-pink-400">Ankit Kumar</span>. All Rights Reserved.
    </p>
    {/* Animations */}
    <style>{`
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both;
      }
    `}</style>
  </footer>
);

export default FooterSection;
