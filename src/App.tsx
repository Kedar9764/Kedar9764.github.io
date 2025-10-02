import React from 'react';
import Header from './components/Header';
import Journey from './components/Journey';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto pt-8">
        {/* Main Content */}
        <main className="w-full md:w-3/5 lg:w-2/3 px-4">
          <Header />
          {/* <Skills /> */}
          <Journey />
          {/* <Experience /> */}
          <Projects />
        </main>
        {/* Sidebar */}
        <aside className="w-full md:w-2/5 lg:w-1/3 px-4 mb-8 md:mb-0">
          <AboutMe />
          <Certifications />
          <About />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;
