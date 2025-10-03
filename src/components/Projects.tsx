import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Zap, TrendingUp, Award } from 'lucide-react';

const projects = [
  {
    title: "Luxury Fitness Centre Web Application",
    category: "E-commerce",
    client: "Fitness & Wellness",
    tools: [
      { name: "React.js", icon: "/techIcons/React.svg" },
      { name: "Node.js", icon: "/techIcons/Node.js.svg" },
      { name: "Postman", icon: "/techIcons/Postman.svg" },
      { name: "Azure", icon: "/techIcons/Azure.svg" }
    ],
    highlights: [
      "Implemented initial code setup with suitable design pattern and architecture single-handedly",
      "Implemented server side rendering to optimize the response time",
      "Maintained higher order components to obtain high code stability"
    ],
    impact: {
      metric: "50%",
      label: "Performance Boost"
    },
    gradient: "from-blue-600 via-cyan-500 to-blue-400"
  },
  {
    title: "Cake Shop E-commerce with Inventory",
    category: "E-commerce",
    client: "Food & Beverage",
    tools: [
      { name: "React.js", icon: "/techIcons/React.svg" },
      { name: "Node.js", icon: "/techIcons/Node.js.svg" },
      { name: "Postman", icon: "/techIcons/Postman.svg" },
      { name: "Azure", icon: "/techIcons/Azure.svg" },
      { name: "Tailwind", icon: "/techIcons/Tailwind CSS.svg" },
      { name: "Post CSS", icon: "/techIcons/PostCSS.svg" }
    ],
    highlights: [
      "Designed various wireframes and user interaction screens",
      "Designed different roadmaps and flow charts for delivery impact",
      "Integrated payment gateway with monitoring screens"
    ],
    impact: {
      metric: "100%",
      label: "Payment Integration"
    },
    gradient: "from-purple-600 via-pink-500 to-purple-400"
  },
  {
    title: "Pastry Shop with Supply Chain Management",
    category: "E-commerce & SCM",
    client: "Food & Beverage",
    tools: [
      { name: "React.js", icon: "/techIcons/React.svg" },
      { name: "Node.js", icon: "/techIcons/Node.js.svg" },
      { name: "Postman", icon: "/techIcons/Postman.svg" },
      { name: "Azure", icon: "/techIcons/Azure.svg" },
      { name: "Tailwind", icon: "/techIcons/Tailwind CSS.svg" },
      { name: "Post CSS", icon: "/techIcons/PostCSS.svg" }
    ],
    highlights: [
      "Implemented high user friendly screens with structured code",
      "Integrated open source libraries to create invoices",
      "Enhanced user experience increasing sales significantly"
    ],
    impact: {
      metric: "50%",
      label: "Sales Increase"
    },
    gradient: "from-orange-600 via-red-500 to-orange-400"
  },
  {
    title: "Hotel Room Booking Application",
    category: "Hospitality",
    client: "Travel & Hospitality",
    tools: [
      { name: "React.js", icon: "/techIcons/React.svg" },
      { name: "Node.js", icon: "/techIcons/Node.js.svg" },
      { name: "Postman", icon: "/techIcons/Postman.svg" },
      { name: "Azure", icon: "/techIcons/Azure.svg" }
    ],
    highlights: [
      "Improved coding standard impacting performance significantly",
      "Designed reusable components for stable code flow",
      "Expunged unused codes & libraries effectively"
    ],
    impact: {
      metric: "60%",
      label: "Dwell Time ↑"
    },
    gradient: "from-green-600 via-teal-500 to-green-400"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards([0, 1]);
            }, 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      if (!visibleCards.includes(nextIndex)) {
        setVisibleCards(prev => [...prev, nextIndex]);
      }
      scrollToCard(nextIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      scrollToCard(prevIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth * 0.85),
        behavior: 'smooth'
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  return (
    <section id="projects" className="py-8 bg-transparent" ref={sectionRef}>
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Key Projects</h2>
          {/* Navigation arrows: only show on mobile/tablet */}
          <div className="flex gap-2 md:hidden">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-lg transition-all ${
                currentIndex === 0
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === projects.length - 1}
              className={`p-2 rounded-lg transition-all ${
                currentIndex === projects.length - 1
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scrolling container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar pb-4 -mx-2 px-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {projects.map((project, idx) => {
              const isVisible = visibleCards.includes(idx);
              const isActive = currentIndex === idx;

              return (
                <div
                  key={idx}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${
                    isActive ? 'scale-100' : 'scale-95 opacity-70'
                  }`}
                  style={{ 
                    width: '380px',
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                    
                    {/* Animated gradient header */}
                    <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-grid-white/10"></div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                          {project.client}
                        </div>
                      </div>
                      
                      {/* Impact badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-lg shadow-lg">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            <div>
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {project.impact.metric}
                              </div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">
                                {project.impact.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                        {project.title}
                      </h3>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                        {project.tools.map((tool, i) => (
                          <div
                            key={i}
                            className="bg-gray-50 dark:bg-gray-900/50 p-2 rounded-lg hover:scale-110 transition-transform duration-200"
                            title={tool.name}
                          >
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="w-6 h-6"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <Zap className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                if (!visibleCards.includes(idx)) {
                  setVisibleCards(prev => [...prev, idx]);
                }
                scrollToCard(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-blue-600 dark:bg-blue-400'
                  : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .bg-grid-white {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Projects;