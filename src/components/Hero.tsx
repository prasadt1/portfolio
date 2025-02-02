import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHTgeSwvjvgVg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678039828041?e=1744243200&v=beta&t=2R1op9SOYrL3EiAXDit3X-97nWLii961c_OBC1-N-BQ"
            alt="Prasad Tilloo"
            className="w-48 h-48 rounded-full mx-auto shadow-xl border-4 border-white dark:border-gray-800"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Prasad Tilloo
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Senior IT Leader | AI & Cloud Innovator | Digital Transformation Expert
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:prasad.sgsits@gmail.com"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/prasadtilloo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/prasadt1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}