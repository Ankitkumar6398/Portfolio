import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/IMG-20241020-WA0005.jpg';

const TITLES = [
  'MERN Stack Developer',
  'DSA and AWS',
  'Problem Solver',
];

const TYPING_SPEED = 80;
const ERASING_SPEED = 40;
const PAUSE_AFTER_TYPING = 1200;
const PAUSE_AFTER_ERASING = 400;

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    if (isTyping) {
      if (displayed.length < currentTitle.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(currentTitle.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPING);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(currentTitle.slice(0, displayed.length - 1));
        }, ERASING_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setTitleIndex((titleIndex + 1) % TITLES.length);
          setIsTyping(true);
        }, PAUSE_AFTER_ERASING);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isTyping, titleIndex]);

  return (
    <header className="relative min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-primary via-blue-100 to-accent dark:from-dark dark:via-secondary dark:to-primary shadow-2xl overflow-hidden animate-gradientX">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 py-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-light mb-2 drop-shadow-lg animate-fadeInUp">Hi, I'm Ankit Kumar</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary dark:text-accent mb-3 min-h-[2.5em] flex items-center animate-fadeInUp">
            <span className="font-mono text-accent dark:text-yellow-300 transition-colors animate-pulse">{displayed}&nbsp;</span>
            <span className="text-accent font-extrabold animate-pulse ml-2">|</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-6 max-w-md animate-fadeInUp">
            I design and build responsive, scalable, and user-friendly web applications.
          </p>
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-6 rounded-full shadow-xl hover:scale-110 hover:-rotate-2 transition-transform duration-300 animate-fadeInUp"
          >
            View My Work
          </a>
        </div>
        <div className="flex justify-center items-center relative animate-fadeInUp">
          <div className="relative group">
            <span className="absolute -z-10 left-1/2 top-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent via-primary to-secondary opacity-30 blur-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform"></span>
            <img src={profileImg} alt="Ankit Kumar" className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-4 border-primary shadow-2xl object-cover transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center z-10 animate-bounce">
        <span className="w-6 h-6 rounded-full bg-accent shadow-lg border-2 border-primary animate-pulse" />
        <span className="block w-1 h-8 bg-primary rounded-full mt-1 animate-fadeInUp" />
      </div>
    </header>
  );
};

export default HeroSection;
