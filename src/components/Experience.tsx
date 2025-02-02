import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: 'SINE Foundation e.V.',
      role: 'Senior Technical Project Manager / Lead Architect',
      period: '2022 - Present',
      description: 'Leading technical initiatives and architectural decisions for enterprise-scale projects.'
    },
    {
      company: 'Delivery Hero SE',
      role: 'Senior Engineering Manager',
      period: '2020 - 2022',
      description: 'Managed engineering teams and led technical strategy for e-commerce platforms.'
    },
    {
      company: 'Boehringer Ingelheim',
      role: 'Lead Architect',
      period: '2018 - 2020',
      description: 'Architected and implemented cloud-native solutions for healthcare systems.'
    },
    {
      company: 'PwC',
      role: 'Senior Manager',
      period: '2016 - 2018',
      description: 'Led digital transformation initiatives for Fortune 500 clients.'
    },
    {
      company: 'Innova Solutions',
      role: 'Tech Lead / Engineering Manager',
      period: '2014 - 2016',
      description: 'Managed development teams and technical delivery of enterprise solutions.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}