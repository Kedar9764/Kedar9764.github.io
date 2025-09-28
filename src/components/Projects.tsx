import React from 'react';

const projects = [
  {
    title: "Web Application For A Luxury Fitness Centre For Selling Fitness Plans",
    tools: [
      { name: "React.js", icon: "/techIcons/React.svg" },
      { name: "Node.js", icon: "/techIcons/Node.js.svg" },
      { name: "Postman", icon: "/techIcons/Postman.svg" },
      { name: "Azure", icon: "/techIcons/Azure DevOps.svg" }
    ],
    responsibilities: [
      "Implemented initial code setup with suitable design pattern and architecture single-handedly.",
      "Implemented server side rendering to optimize the response time & improved the performance time by 50%.",
      "Maintained higher order components to obtain high code stability to deliver seamless impact."
    ]
  },
  {
    title: "Complete E-commerce Application For A Cake Shop With Inventory Support",
    tools: [
      { name: "React.js", icon: "/techIcons/React.svg" },
      { name: "Node.js", icon: "/techIcons/Node.js.svg" },
      { name: "Postman", icon: "/techIcons/Postman.svg" },
      { name: "Azure", icon: "/techIcons/Azure DevOps.svg" },
      { name: "Tailwind", icon: "/techIcons/Tailwind CSS.svg" },
      { name: "Post CSS", icon: "/techIcons/PostCSS.svg" }
    ],
    responsibilities: [
      "Designed various wireframes and user interaction screens according to client requirements.",
      "Designed different roadmaps and flow charts to ensure high level of delivery impact.",
      "Integrated single payment gateway to capture all transactions with monitoring screens."
    ]
  },
  {
    title: "Complete E-commerce Application For A Pastry Shop With Supply Chain Management Support",
    tools: [
      { name: "React.js", icon: "/techIcons/React.svg" },
      { name: "Node.js", icon: "/techIcons/Node.js.svg" },
      { name: "Postman", icon: "/techIcons/Postman.svg" },
      { name: "Azure", icon: "/techIcons/Azure DevOps.svg" },
      { name: "Tailwind", icon: "/techIcons/Tailwind CSS.svg" },
      { name: "Post CSS", icon: "/techIcons/PostCSS.svg" }
    ],
    responsibilities: [
      "Implemented high user friendly screens with structured code which increased the reaction time by 60%.",
      "Integrated open source libraries to create invoices for better user experience, increasing sales by 50%."
    ]
  },
  {
    title: "Web Application For Booking of Hotel Rooms",
    tools: [
      { name: "React.js", icon: "/techIcons/React.svg" },
      { name: "Node.js", icon: "/techIcons/Node.js.svg" },
      { name: "Postman", icon: "/techIcons/Postman.svg" },
      { name: "Azure", icon: "/techIcons/Azure DevOps.svg" }
    ],
    responsibilities: [
      "Improved coding standard in project which impacted performance by 50%.",
      "Designed reusable components to ensure code flow stable and sustainable.",
      "Expunged the unused codes & libraries, effectively increasing dwell time by 60%."
    ]
  }
];

const Projects = () => (
  <section id="projects" className="py-8">
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{project.title}</h3>
            <div className="flex flex-wrap gap-3 mb-2">
              {project.tools.map((tool, i) => (
                <img
                  key={i}
                  src={tool.icon}
                  alt={tool.name}
                  title={tool.name}
                  className="w-7 h-7 inline-block"
                />
              ))}
            </div>
            <div className="flex flex-col text-gray-700 dark:text-gray-300 text-sm space-y-1 pl-0">
              {project.responsibilities.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
