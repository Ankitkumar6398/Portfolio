import React from 'react';
import profileImg from '../assets/Ankit Image.jpg';

const TECH_STACK = ['Java', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'];
const TOOLS = ['GitHub', 'IntelliJ IDEA'];

const AboutSection = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="about"
      className="max-w-5xl mx-auto my-16 px-4 py-12 bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/80 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-12 animate-fadeInUp"
    >
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-blue-200 mb-2 drop-shadow-lg animate-fadeInUp">About Me</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-2 leading-relaxed animate-fadeInUp">
          Hi! I'm a final-year B.Tech CSE student with a strong interest in web development and problem-solving.<br/>
          I've built a solid foundation in data structures, algorithms, and backend technologies, and have worked
          on small full-stack projects using Java, React, Node.js, and MongoDB.<br /><br />
          I enjoy creating clean, functional web apps and love learning new tools and frameworks. Currently seeking
          internship or project-based opportunities to grow as a developer.
        </p>
        <div className="w-full flex flex-col sm:flex-row gap-6 animate-fadeInUp">
          <div className="flex-1 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-4">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2 tracking-wide">Tech Stack</h3>
            <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
              {TECH_STACK.map(tech => (
                <li key={tech} className="bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 px-3 py-1 rounded-lg text-sm font-semibold shadow hover:scale-110 hover:-rotate-2 transition-transform duration-300 animate-wiggle cursor-pointer">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-4">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2 tracking-wide">Tools</h3>
            <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
              {TOOLS.map(tool => (
                <li key={tool} className="bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 px-3 py-1 rounded-lg text-sm font-semibold shadow hover:scale-110 hover:rotate-2 transition-transform duration-300 animate-wiggle cursor-pointer">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 hover:-rotate-2 transition-all duration-300 animate-fadeInUp mt-2"
        >
          Download Resume
        </a>
      </div>
      <div className="flex-1 flex justify-center animate-fadeInUp">
        <div className="relative group">
          <span className="absolute -z-10 left-1/2 top-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent via-primary to-secondary opacity-30 blur-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform"></span>
          <img src={profileImg} alt="Ankit Kumar" className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-4 border-primary shadow-2xl object-cover transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
