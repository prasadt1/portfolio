import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      title: 'SAFe Certified DevOps Practitioner',
      issuer: 'Scaled Agile',
      year: '2022'
    }
  ];

  const awards = [
    {
      title: 'Excellence in Innovation',
      issuer: 'PwC',
      year: '2017'
    },
    {
      title: 'Outstanding Technical Leadership',
      issuer: 'Innova Solutions',
      year: '2015'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Certifications & Awards
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex items-start"
                >
                  <Award className="w-6 h-6 text-blue-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex items-start"
                >
                  <Award className="w-6 h-6 text-blue-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {award.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {award.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {award.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}