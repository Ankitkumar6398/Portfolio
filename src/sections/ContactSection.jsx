import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    id="contact"
    className="w-full py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-8 tracking-tight drop-shadow-lg">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
          Get In Touch
        </span>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">
        I'm currently open to new opportunities. Feel free to reach out!
      </p>

      {/* Contact Form */}
      <section className="max-w-lg mx-auto py-10 px-2">
        <form className="relative group rounded-3xl p-1 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 shadow-2xl hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 before:absolute before:inset-0 before:rounded-3xl before:bg-white/60 before:dark:bg-gray-900/60 before:backdrop-blur-xl before:z-0">
          <div className="relative z-10 flex flex-col gap-5 p-8">
            <input className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-pink-400 transition bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-md animate-fadeInUp" placeholder="Your Name" style={{animationDelay: '0.1s'}} />
            <input className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-pink-400 transition bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-md animate-fadeInUp" placeholder="Your Email" style={{animationDelay: '0.22s'}} />
            <textarea className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-pink-400 transition bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-md animate-fadeInUp" placeholder="Your Message" rows={4} style={{animationDelay: '0.34s'}} />
            <button type="submit" className="relative bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 rounded-xl shadow-lg font-bold text-lg hover:scale-105 transition-transform duration-300 overflow-hidden focus:outline-none animate-fadeInUp" style={{animationDelay: '0.46s'}}>
              <span className="relative z-10">Send</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 animate-pulse" />
            </button>
          </div>
        </form>
      </section>

      {/* Alternative Contact Info */}
      <div className="mt-14">
        <p className="text-gray-700 dark:text-gray-300 mb-2 text-base">
          Or email me directly at:{' '}
          <a
            href="mailto:ankitsingh7310756664@gmail.com"
            className="text-primary font-semibold underline hover:text-pink-500 transition-colors duration-200 underline-offset-4 decoration-2 hover:decoration-pink-500 animate-fadeInUp"
            style={{animationDelay: '0.6s'}}
          >
            ankitsingh7310756664@gmail.com
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 mt-6 text-3xl animate-fadeInUp" style={{animationDelay: '0.7s'}}>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-white hover:text-blue-500 hover:scale-125 transition-all duration-300 rounded-full p-2 bg-white/60 dark:bg-gray-800/60 shadow-md backdrop-blur-md border border-blue-100/30 dark:border-pink-200/10"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-white hover:text-pink-500 hover:scale-125 transition-all duration-300 rounded-full p-2 bg-white/60 dark:bg-gray-800/60 shadow-md backdrop-blur-md border border-blue-100/30 dark:border-pink-200/10"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
    {/* Animations */}
    <style>{`
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both;
      }
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 3s ease-in-out infinite;
      }
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `}</style>
  </section>
);

export default ContactSection;
