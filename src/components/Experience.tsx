import React from 'react';

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Accenture",
    period: "07/2024 - Present",
    details: "Improved data throughput by 40% through cloud-integrated file upload systems.",
    logo: "/accenture.png"
  },
  {
    role: "Software Engineer",
    company: "LTIMindtree",
    period: "06/2021 - 06/2024",
    details: "Boosted user experience by 50% through intuitive UI and payment integration.",
    logo: "/lt.png"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-8 bg-transparent">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-start relative">
              {exp.company === "LTIMindtree" ? (
                <img src={exp.logo} alt={exp.company + ' logo'} className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 object-contain rounded dark:invert-0 invert" />
              ) : (
                <img src={exp.logo} alt={exp.company + ' logo'} className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 object-contain rounded" />
              )}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
              <p className="text-md text-gray-700 dark:text-gray-300 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
              <p className="text-base text-gray-700 dark:text-gray-300">{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
