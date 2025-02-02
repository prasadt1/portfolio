import React from 'react';
import { Award, Cloud, Shield } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Transformation',
      description: 'Led major cloud migrations across AWS, Azure, and GCP platforms'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: 'Cost Optimization',
      description: 'Achieved $2M+ savings through AI-driven automation initiatives'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Compliance Expert',
      description: 'Implemented ISO 27001, SOC 2, GDPR, and HIPAA compliance frameworks'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            With over 15 years of experience across banking, telecom, e-commerce, retail, healthcare, and AdTech industries,
            I specialize in driving digital transformation and innovation. My expertise spans cloud architecture,
            AI implementation, and enterprise-scale digital solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}