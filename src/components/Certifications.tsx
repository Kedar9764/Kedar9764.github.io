import React, { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const certifications = [
    {
    title: "GitHub Copilot Certification",
    issuer: "Microsoft",
    date: "2025",
    logo: "/techIcons/GitHub.svg",
    credentialId: "839AFC74B42141FB",
    credentialUrl: "https://learn.microsoft.com/en-in/users/kedarkhotkar-4582/credentials/839afc74b42141fb?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    skills: ["AI-Assisted Coding", "GitHub Copilot", "Productivity"],
    description: "Certification in leveraging AI-powered coding assistance for enhanced development workflows."
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "2023",
    logo: "/techIcons/React.svg", // Replace with Meta logo if you have it
    credentialId: "81c195f67c3df1a58bd94036daf47d7f",
    credentialUrl: "https://coursera.org/share/81c195f67c3df1a58bd94036daf47d7f",
    skills: ["Algorithms","GitHub","Version Control","Web Development Tools","React", "JavaScript", "HTML/CSS", "UI/UX", "Jest (JavaScript Testing Framework)"],
    description: "Comprehensive program covering modern front-end development practices and frameworks."
  }
];

const Certifications = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            certifications.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200);
            });
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

  return (
    <section id="certifications" className="py-4 bg-transparent" ref={sectionRef}>
      <div className="w-full">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
        <div className="flex flex-col gap-4">
          {certifications.map((cert, index) => {
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Header with logo and badge icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className={`w-12 h-12 object-contain${cert.issuer === 'Microsoft' ? ' dark:invert' : ''}`}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <Award className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Earned: {cert.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential info and verify link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    ID: {cert.credentialId}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Verify
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
