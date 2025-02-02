import React from 'react';
import { Cloud, Code, Shield } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'Google Cloud Platform'],
      proficiency: [90, 85, 80]
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'Programming',
      skills: ['Java', 'Golang', 'React', 'Angular'],
      proficiency: [95, 85, 80, 75]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Compliance & Security',
      skills: ['ISO 27001', 'GDPR', 'HIPAA'],
      proficiency: [90, 85, 85]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {category.proficiency[skillIndex]}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 rounded-full h-2 transition-all duration-500"
                        style={{ width: `${category.proficiency[skillIndex]}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}