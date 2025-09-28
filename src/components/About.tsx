import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 flex items-center justify-center bg-transparent">
  <div className="w-full bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8 flex flex-col gap-6">
        {/* <h2 className="text-xl font-semibold text-blue-600 text-left w-full">About</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Languages</h3>
            <ul className="text-base text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <img src="/techIcons/JavaScript.svg" alt="JavaScript" className="w-6 h-6" />
                JavaScript
              </li>
              <li className="flex items-center gap-2">
                <img src="/techIcons/TypeScript.svg" alt="TypeScript" className="w-6 h-6" />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <img src="/techIcons/HTML5.svg" alt="HTML" className="w-6 h-6" />
                HTML
              </li>
              <li className="flex items-center gap-2">
                <img src="/techIcons/CSS3.svg" alt="CSS" className="w-6 h-6" />
                CSS
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
            <ul className="text-base text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <img src="/techIcons/React.svg" alt="ReactJS" className="w-6 h-6" />
                ReactJS
              </li>
              <li className="flex items-center gap-2">
                <img src="/techIcons/Node.js.svg" alt="NodeJS" className="w-6 h-6" />
                NodeJS
              </li>
              <li className="flex items-center gap-2">
                <span className="dark:invert">
                  <img src="/techIcons/Express.svg" alt="Express" className="w-6 h-6" />
                </span>
                Express
              </li>
              <li className="flex items-center gap-2">
                <img src="/techIcons/Redux.svg" alt="Redux" className="w-6 h-6" />
                Redux
              </li>
              <li className="flex items-center gap-2">
                <img src="/techIcons/Webpack.svg" alt="Webpack" className="w-6 h-6" />
                Webpack
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Testing Tools</h3>
            <ul className="text-base text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <img src="/techIcons/Playwrite.svg" alt="Playwright" className="w-6 h-6" />
                Playwright
              </li>
              <li className="flex items-center gap-2">
                <img src="/techIcons/Jest.svg" alt="Jest" className="w-6 h-6" />
                Jest
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Design Tools</h3>
              <ul className="text-base text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <img src="/techIcons/Figma.svg" alt="Figma" className="w-6 h-6" />
                  Figma
                </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Version Tools</h3>
            <ul className="text-base text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <img src="/techIcons/GitHub Codespaces.svg" alt="GitHub Codespaces" className="w-6 h-6" />
                GitHub Codespaces
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
