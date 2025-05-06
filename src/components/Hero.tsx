
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hello, I'm <span className="text-theme-purple">Shilpi Vydhyula</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
              Senior Technical Specialist
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              10+ years of experience in leading product teams and full-cycle application development, 
              from proof of concept to designing, developing, and deploying scalable applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:shilpivydhyula3116@gmail.com" className="flex items-center gap-2">
                  <Mail size={16} /> Email Me
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-theme-purple to-theme-light-purple opacity-20 absolute -z-10 blur-2xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-theme-purple overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600"
                  alt="Shilpi Vydhyula"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-sm bg-white animate-fade-in">
            <h3 className="text-lg font-semibold mb-2">Mobile & Web Development</h3>
            <p className="text-gray-600">Expert in React Native, Next.js, React.js & more</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-lg font-semibold mb-2">Product Management</h3>
            <p className="text-gray-600">Leading teams and delivering successful products</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white animate-fade-in" style={{animationDelay: "0.4s"}}>
            <h3 className="text-lg font-semibold mb-2">Full Stack Development</h3>
            <p className="text-gray-600">End-to-end solutions with modern technologies</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#about" className="inline-block">
            <div className="animate-bounce w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-500">
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
