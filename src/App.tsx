import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto pt-8">
        {/* Main Content */}
        <main className="w-full md:w-2/3 lg:w-3/4 px-4">
        <Header />
          {/* <Skills /> */}
          <Experience />
          <Projects />
        </main>
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0">
          {/* You can move About/Profile/Contact here for LinkedIn-style sidebar */}
          <About />
          {/* <Contact /> */}
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;
