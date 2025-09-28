import React from 'react';

const skills = ["React.js", "TypeScript", "Node.js", "AWS Lambda", "Jest", "Webpack", "GitHub", "Framer Motion"];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
