import React from 'react';
import jobPortalImg from '../assets/job_image.webp';
import project3Img from '../assets/blog_api.webp';
import portfolioImg from '../assets/portfolio.webp';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A fully responsive, animated portfolio site to showcase my skills, projects, and experience with a modern 3D UI.',
    tech: ['React', 'TailwindCSS'],
    img: portfolioImg,  // replace with your actual image key
    link: 'https://portfolio-mu-pearl-27.vercel.app/',  // your deployed portfolio link
    linkLabel: 'Visit Portfolio',
  },
  
  {
    title: 'Job Portal',
    description:
      'A comprehensive platform for job seekers and employers to connect and manage job applications.',
    tech: ['React', 'Node.js', 'MongoDB'],
    img: jobPortalImg,
    link: '#',
    linkLabel: 'View Project',
  },
  {
    title: 'Blog API',
    description:
      'A robust backend RESTful API for a blog platform. Supports user authentication, post creation, commenting, and more.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    img: project3Img,
    link: '#',
    linkLabel: 'View GitHub',
  },
  {
    title: 'Chatting App',
    description:
      'A chatting app to help users chat with each other.',
    tech: ['React', 'MongoDB', 'Node.js'],
    img: (images) => images.project4Img,
    link: 'https://chat-application-ankit-kumars-projects-cd97ef16.vercel.app/',
    linkLabel: 'Visit Project',
  },
];

const ProjectsSection = ({ images, sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-16 tracking-tight drop-shadow-lg">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Selected Work
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={
                `relative group rounded-3xl p-1 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 shadow-2xl hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-500 ` +
                `hover:scale-[1.04] hover:-rotate-1 ` +
                `before:absolute before:inset-0 before:rounded-3xl before:bg-white/60 before:dark:bg-gray-900/60 before:backdrop-blur-xl before:z-0`
              }
              style={{
                animation: `fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both`,
                animationDelay: `${idx * 0.15 + 0.1}s`,
              }}
            >
              <div className="relative z-10 flex flex-col items-center p-8">
                <div className="w-24 h-24 mb-5 rounded-2xl overflow-hidden shadow-xl border-4 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-500">
                  <img
                    src={typeof project.img === 'function' ? project.img(images) : project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2 drop-shadow-sm">
                  {project.title}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300 text-base mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center gap-2 flex-wrap mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-blue-400/20 to-pink-400/20 text-blue-700 dark:text-pink-300 text-xs px-3 py-1 rounded-full font-semibold shadow-sm border border-blue-200/40 dark:border-pink-400/20 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="relative inline-flex items-center gap-2 text-primary font-semibold text-base px-4 py-2 rounded-lg bg-white/70 dark:bg-gray-900/70 shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-white transition-all duration-300 group/link"
                >
                  {project.linkLabel}
                  <svg className="w-4 h-4 opacity-70 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 group-hover/link:w-full" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
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
};

export default ProjectsSection;
