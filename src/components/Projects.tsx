import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'WBCSD PACT Standard',
      description: 'Collaborated with Microsoft, SAP, and Siemens to develop standardized sustainability reporting framework.',
      tags: ['Enterprise Architecture', 'Sustainability', 'Standardization']
    },
    {
      title: 'Cloud Modernization',
      description: 'Led cloud transformation for major retail/e-commerce platform using AWS and microservices architecture.',
      tags: ['AWS', 'Microservices', 'DevOps']
    },
    {
      title: 'AI/ML Automation',
      description: 'Developed enterprise-scale AI/ML solutions for process automation and optimization.',
      tags: ['AI/ML', 'Automation', 'Python']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                {project.title}
                <ExternalLink className="w-4 h-4 ml-2" />
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}