import React, { useEffect, useRef, useState } from "react";

const journeySteps = [
  {
    period: "Present",
    fullPeriod: "07/2024 - Present",
    title: "Senior Software Engineer",
    org: "Accenture, Bengaluru, India",
    project: "Marine & Auto Insurance Web Platform (US Client)",
    details: [
      "Led requirements and partnered with design to develop a secure, scalable file upload system with RESTful API, cloud storage, and backend integration",
      "Improved data throughput by 40% and enhanced user experience within 8 months through performance-focused architecture",
      "Designed and delivered a robust file upload feature, recognized as one of the most impactful deliverables by the client",
      "Implemented micro-frontend architecture for modularity and scalability, integrating seamlessly with AWS services",
      "Utilized PostgreSQL for data storage and retrieval, ensuring reliability, consistency, and security of client data",
      "Collaborated cross-functionally with design and QA teams to ensure compliance with insurance data regulations and improve overall system adoption"
    ]
  },
  {
    period: "2024",
    fullPeriod: "06/2021 - 06/2024",
    title: "Software Engineer",
    org: "LTIMindtree, Bengaluru, India",
    project: "Hotel Booking and E-commerce Web Applications (Middle East Client)",
    details: [
      "Engineered high-performance web apps with server-side rendering and reusable components, elevating application performance by up to 60% and assuring scalable code.",
      "Translated business requirements into intuitive UI designs and workflows, boosting user experience and operational efficiency by 50%.",
      "Integrated payment gateways and supply chain tools, enhancing transaction tracking and driving a 50% increase in sales."
    ]
  },
  {
    period: "2021",
    fullPeriod: "06/2017 - 06/2021",
    title: "B.Tech in Electronics & Telecommunication Engineering",
    org: "Shivaji University",
    project: "",
    details: [
      "GPA: 3.8, Best Thesis Awardee.",
      "Published research papers in reputed journals including IEEE and Springer."
    ]
  }
];

const Journey = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visiblePeriods, setVisiblePeriods] = useState<number[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const [cardMiddlePositions, setCardMiddlePositions] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calculate middle positions of each card after render
    const positions = cardRefs.current.map(ref => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (containerRect) {
          return ref.offsetTop + ref.offsetHeight / 2;
        }
      }
      return 0;
    });
    setCardMiddlePositions(positions);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardMiddlePositions.length > 0) {
            // Start from bottom card's middle
            const lastCardMiddle = cardMiddlePositions[cardMiddlePositions.length - 1];
            const firstCardMiddle = cardMiddlePositions[0];
            
            // Show last period immediately
            setVisiblePeriods([journeySteps.length - 1]);
            setVisibleCards([journeySteps.length - 1]);
            
            // Animate line from bottom to top
            const totalDistance = lastCardMiddle - firstCardMiddle;
            const duration = 3000; // 3 seconds total
            const steps = 60; // 60 frames
            const increment = totalDistance / steps;
            const timePerStep = duration / steps;
            
            let currentHeight = 0;
            let step = 0;
            
            const animate = () => {
              if (step <= steps) {
                currentHeight += increment;
                setLineHeight(currentHeight);
                
                // Check if we've passed each card's middle point and show period + card
                cardMiddlePositions.forEach((position, idx) => {
                  const relativePosition = lastCardMiddle - position;
                  if (currentHeight >= relativePosition) {
                    setVisiblePeriods(prev => {
                      if (!prev.includes(idx)) {
                        return [...prev, idx];
                      }
                      return prev;
                    });
                    setVisibleCards(prev => {
                      if (!prev.includes(idx)) {
                        return [...prev, idx];
                      }
                      return prev;
                    });
                  }
                });
                
                step++;
                setTimeout(animate, timePerStep);
              }
            };
            
            setTimeout(animate, 300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current && cardMiddlePositions.length > 0) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [cardMiddlePositions]);

  return (
    <section id="journey" className="py-8 bg-transparent">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Journey</h2>
        
        <div ref={containerRef} className="relative">
          {/* Timeline vertical line container */}
          <div 
            ref={timelineRef}
            className="absolute left-4 md:left-24 top-0 w-2 flex justify-center"
            style={{ 
              height: cardMiddlePositions.length > 0 
                ? `${cardMiddlePositions[cardMiddlePositions.length - 1] - cardMiddlePositions[0]}px` 
                : '100%',
              top: cardMiddlePositions.length > 0 ? `${cardMiddlePositions[0]}px` : '0'
            }}
          >
            {/* Background tube */}
            <div className="relative w-2 h-full bg-blue-100 dark:bg-blue-900 rounded-full">
              {/* Animated filling liquid */}
              <div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full transition-none"
                style={{ height: `${lineHeight}px` }}
              >
                {/* Glowing dot at the top of liquid - hide when animation complete */}
                <div 
                  className={`absolute -top-2 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500 ${
                    visiblePeriods.length === journeySteps.length ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/50" />
                </div>
              </div>
              
              {/* Static milestone dots at each card's middle - rendered on top */}
              {cardMiddlePositions.map((position, idx) => {
                const relativePosition = cardMiddlePositions[cardMiddlePositions.length - 1] - position;
                const isPeriodVisible = visiblePeriods.includes(idx);
                
                return (
                  <div
                    key={idx}
                    className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 z-30"
                    style={{ bottom: `${relativePosition - 8}px` }}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full border-4 bg-white dark:bg-gray-900 border-blue-500 dark:border-blue-400 transition-all duration-500 ${
                        isPeriodVisible 
                          ? 'scale-100 opacity-100 shadow-xl shadow-blue-500/60' 
                          : 'scale-0 opacity-0'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Journey cards */}
          <div className="ml-12 md:ml-32 space-y-8">
            {journeySteps.map((step, idx) => {
              const isCardVisible = visibleCards.includes(idx);
              const isPeriodVisible = visiblePeriods.includes(idx);

              return (
                <div
                  key={idx}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  className="relative"
                >
                  {/* Period badge - responsive positioning */}
                  <div className="absolute -left-16 md:-left-40 top-2 md:top-0 w-12 md:w-28 text-right flex items-start md:items-center justify-end md:h-full">
                    <span 
                      className={`text-blue-600 dark:text-blue-400 font-semibold text-xs md:text-sm whitespace-nowrap transition-all duration-500 ${
                        isPeriodVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      {step.period}
                    </span>
                  </div>

                  {/* Card */}
                  <div 
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-700 ${
                      isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      {/* Title row with logo aligned right */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                          {step.title}
                        </h3>
                        {(step.org.includes('Accenture') || step.org.includes('LTIMindtree')) && (
                          step.org.includes('Accenture') ? (
                            <img
                              src="/accenture.png"
                              alt="Accenture"
                              className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0"
                            />
                          ) : step.org.includes('LTIMindtree') ? (
                            <img
                              src="/lt.png"
                              alt="LTIMindtree"
                              className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 invert dark:invert-0"
                            />
                          ) : null
                        )}
                      </div>
                      {/* Full period below title */}
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{step.fullPeriod}</span>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        {step.org}
                      </p>
                      {step.project && (
                        <p className="text-xs text-blue-500 dark:text-blue-400 font-medium mt-1">
                          {step.project}
                        </p>
                      )}
                      <ul className="mt-2 md:mt-3 space-y-1.5 md:space-y-2">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-xs md:text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;