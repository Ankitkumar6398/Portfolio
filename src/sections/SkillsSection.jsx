import React from 'react';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  {
    name: 'React',
    icon: <FaReact className="text-5xl text-blue-500 drop-shadow-lg group-hover:animate-spin-slow group-hover:text-blue-400 transition-all duration-500" />,
    bg: 'from-blue-100 to-blue-300',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-4xl text-green-600 drop-shadow-lg group-hover:animate-bounce-slow group-hover:text-green-500 transition-all duration-500" />,
    bg: 'from-green-100 to-green-300',
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-4xl text-gray-700 dark:text-white drop-shadow-lg group-hover:animate-pulse-slow group-hover:text-gray-400 transition-all duration-500" />,
    bg: 'from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-5xl text-green-500 drop-shadow-lg group-hover:animate-wiggle group-hover:text-green-400 transition-all duration-500" />,
    bg: 'from-green-100 to-green-400',
  },
  {
    name: 'AWS',
    icon: <FaAws className="text-5xl text-orange-400 drop-shadow-lg group-hover:animate-bounce-slow group-hover:text-yellow-400 transition-all duration-500" />,
    bg: 'from-yellow-100 to-yellow-300',
  },
];

const SkillsSection = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-500 animate-fadeInUp"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-blue-200 mb-14 drop-shadow-lg animate-fadeInUp">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Skills & Tools
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center items-center animate-fadeInUp">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`group relative bg-gradient-to-br ${skill.bg} dark:from-gray-800 dark:to-gray-900 p-8 rounded-3xl shadow-2xl before:absolute before:inset-0 before:rounded-3xl before:bg-white/60 before:dark:bg-gray-900/60 before:backdrop-blur-xl before:z-0 border-2 border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-pink-400 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-500 hover:scale-110 hover:-rotate-2 cursor-pointer animate-fadeInUp`}
              style={{ animationDelay: `${idx * 0.12 + 0.1}s` }}
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-3">
                  {skill.icon}
                </div>
                <span className="block mt-2 text-lg font-bold text-gray-800 dark:text-gray-100 tracking-wide animate-glow relative after:content-[''] after:block after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-pink-400 after:rounded-full after:transition-all after:duration-300 group-hover:after:w-full">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
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
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 2.5s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.5s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 1.5s infinite;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-wiggle {
          animation: wiggle 1.2s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 6px #a5b4fc, 0 0 12px #f472b6; }
          50% { text-shadow: 0 0 16px #818cf8, 0 0 32px #f472b6; }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
