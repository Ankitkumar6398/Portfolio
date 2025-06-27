import React from 'react';

const TestimonialsSection = ({ testimonialAvatar, sectionRef, testimonials = [] }) => {
  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-16 tracking-tight drop-shadow-lg">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Testimonials
          </span>
        </h2>

        {testimonials.length === 0 ? (
          <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 text-gray-600 dark:text-gray-300 shadow-xl max-w-xl mx-auto backdrop-blur-md border border-blue-100/30 dark:border-pink-200/10">
            <p>No testimonials yet. Be the first to share your feedback!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={
                  `relative group rounded-3xl p-1 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 shadow-2xl hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-500 ` +
                  `hover:scale-[1.04] hover:-rotate-1 ` +
                  `before:absolute before:inset-0 before:rounded-3xl before:bg-white/60 before:dark:bg-gray-900/60 before:backdrop-blur-xl before:z-0`
                }
                style={{
                  animation: `fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both`,
                  animationDelay: `${idx * 0.18 + 0.1}s`,
                }}
              >
                <div className="relative z-10 flex flex-col items-center p-8">
                  {testimonial.avatar && (
                    <div className="mb-5">
                      <span className="inline-block rounded-full p-1 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 animate-avatar-glow">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-900 group-hover:scale-110 transition-transform duration-500"
                        />
                      </span>
                    </div>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4 text-lg">
                    “{testimonial.text}”
                  </p>
                  <cite className="block text-base font-semibold text-gray-700 dark:text-pink-200">
                    – {testimonial.name}, <span className="font-normal text-gray-500 dark:text-gray-400">{testimonial.role}</span>
                  </cite>
                </div>
              </div>
            ))}
          </div>
        )}
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
        @keyframes avatar-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.4), 0 0 0 0 rgba(236,72,153,0.3); }
          50% { box-shadow: 0 0 16px 8px rgba(99,102,241,0.25), 0 0 32px 16px rgba(236,72,153,0.15); }
        }
        .animate-avatar-glow {
          animation: avatar-glow 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
