import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'prasad.sgsits@gmail.com',
      href: 'mailto:prasad.sgsits@gmail.com'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prasadtilloo',
      href: 'https://linkedin.com/in/prasadtilloo'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/prasadt1',
      href: 'https://github.com/prasadt1'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-8">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-6">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {contact.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}