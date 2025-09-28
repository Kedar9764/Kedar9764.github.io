import React, { useEffect, useState } from 'react';

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const toggleTheme = () => setDark((d) => !d);

  return (
    <header className="w-full flex justify-center bg-gray-100 dark:bg-gray-900 py-4">
  <div className="w-full max-w-4xl rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900 relative">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="absolute top-3 right-3 md:top-4 md:right-4 bg-transparent hover:bg-gray-200/40 dark:hover:bg-gray-700/40 rounded-full p-2 transition-colors z-20"
          aria-label="Toggle theme"
        >
          {dark ? (
            // Moon icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          ) : (
            // Sun icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </button>
        {/* Banner as part of card */}
        <div className="w-full h-32 md:h-44 bg-gradient-to-r from-blue-700 to-blue-400 relative">
          <img
            src="/Profile.jpg"
            alt="Profile"
            className="absolute left-6 md:left-10 -bottom-12 md:-bottom-16 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover object-[center_10%] bg-white"
          />
        </div>
        {/* Card content below banner */}
        <div className="pt-16 md:pt-20 pb-6 px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">Kedar Khotkar
              <span className="inline-block align-middle ml-1"><svg xmlns='http://www.w3.org/2000/svg' className='inline w-5 h-5 text-blue-600' fill='currentColor' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='none' stroke='currentColor' strokeWidth='2'/><path d='M9 12l2 2 4-4' stroke='currentColor' strokeWidth='2' fill='none'/></svg></span>
            </div>
            <div className="text-md md:text-lg text-gray-700 dark:text-gray-200 font-medium">Senior Software Developer</div>
            <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1"> Bangalore, Karnataka, India
              {/* Bangalore, Karnataka, India · <a href="#contact" className="text-blue-600 hover:underline">+91 9921901848</a> */}
            </div>
            {/* <div className="text-blue-600 font-semibold text-sm md:text-base mt-1 cursor-pointer hover:underline">500+ connections</div>
            <div className="flex flex-wrap gap-2 mt-3">
              <button className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold border border-blue-300">Open to</button>
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">Add profile section</button>
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">Enhance profile</button>
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">Resources</button>
            </div> */}
          </div>
          <div className="flex flex-col gap-3 items-start md:items-end mt-4 md:mt-0">
            {/* <div className="flex items-center gap-2">
              <img src="/logo512.png" alt="Accenture" className="w-8 h-8 rounded" />
              <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">Accenture</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/logo192.png" alt="Shivaji University" className="w-8 h-8 rounded" />
              <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">LTIMindtree</span>
            </div> */}
              {/* Tech stack icons */}
              <div className="flex flex-row gap-3 mt-2 w-full justify-start md:justify-end">
                <img src="/techIcons/React.svg" alt="ReactJS" title="ReactJS" className="w-9 h-9" />
                <img src="/techIcons/Node.js.svg" alt="NodeJS" title="NodeJS" className="w-9 h-9" />
                <img src="/techIcons/TypeScript.svg" alt="TypeScript" title="TypeScript" className="w-9 h-9" />
                <img src="/techIcons/Webpack.svg" alt="Webpack" title="Webpack" className="w-9 h-9" />
                <span className="dark:invert">
                  <img src="/techIcons/AWS.svg" alt="AWS" title="AWS" className="w-9 h-9" />
                </span>
                {/* <span className="dark:invert">
                  <img src="/techIcons/github-copilot.png" alt="Copilot" title="AWS" className="w-9 h-9" />
                </span> */}
              </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
