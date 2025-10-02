import React from "react";

const AboutMe = () => (
  <section className="mt-4">
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6">
      <div className="flex flex-col gap-2 mt-2 w-full justify-start md:justify-end text-sm md:text-md">
                <div><span role="img" aria-label="flag">🇮🇳</span> <span className="font-semibold">Nationality:</span> Indian</div>
                <div><span role="img" aria-label="birthday">🎂</span> <span className="font-semibold">Date of Birth:</span> 11 Feb 2000</div>
                {/* <div><span role="img" aria-label="house">🏠</span> <span className="font-semibold">Address:</span> Gujari Bazar, Near Shivaji Chowk, Parbhani, Maharashtra India - 431401</div> */}
                <div><span role="img" aria-label="phone">📞</span> <span className="font-semibold">Phone:</span> <a href="tel:+919921901848" className="text-blue-600 hover:underline">+91 9921901848</a></div>
                <div><span role="img" aria-label="email">✉️</span> <span className="font-semibold">Email:</span> <a href="mailto:kedar.khotkar786@gmail.com" className="text-blue-600 hover:underline">kedar.khotkar786@gmail.com</a></div>
                <div><span role="img" aria-label="linkedin">🔗</span> <span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/kedar-khotkar/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/kedar-khotkar/</a></div>
                <div><span role="img" aria-label="portfolio">🌐</span> <span className="font-semibold">Portfolio:</span> <a href="https://kedar9764.github.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">kedar9764.github.io</a></div>
                <div><span role="img" aria-label="github">🐙</span> <span className="font-semibold">GitHub:</span> <a href="https://github.com/Kedar9764" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/Kedar9764</a></div>
              </div><br/>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">About Me <span role="img" aria-label="wave">👋</span></h2>
      <p className="text-base text-gray-700 dark:text-gray-300">
        Hi, I’m Kedar <span role="img" aria-label="man-technologist">👨‍💻</span> — a Senior Software Engineer with expertise in frontend and full-stack development.<br/><br/>
        I specialize in React <span role="img" aria-label="atom">⚛️</span>, Node.js <span role="img" aria-label="rocket">🚀</span>, and cloud-based scalable systems <span role="img" aria-label="cloud">☁️</span>.<br/><br/>
        Over the past 4 years <span role="img" aria-label="calendar">📅</span>, I’ve delivered high-impact projects for global clients in insurance <span role="img" aria-label="shield">🛡️</span>, e-commerce <span role="img" aria-label="shopping">🛒</span>, and hospitality <span role="img" aria-label="hotel">🏨</span>.<br/><br/>
        I enjoy solving real-world problems <span role="img" aria-label="bulb">💡</span> through design-driven engineering <span role="img" aria-label="art">🎨</span> and AI-powered solutions <span role="img" aria-label="robot">🤖</span>.
      </p> 
    </div>
    
  </section>
);

export default AboutMe;
