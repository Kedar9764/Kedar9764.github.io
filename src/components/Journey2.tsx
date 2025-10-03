import React, { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const journeySteps = [
	{
		period: "2021",
		fullPeriod: "06/2017 - 06/2021",
		title: "B.Tech in Electronics & Telecommunication Engineering",
		org: "Shivaji University",
		project: "",
		details: [
			"GPA: 3.8, Best Thesis Awardee.",
			"Published research papers in reputed journals including IEEE and Springer.",
		],
		icon: "education",
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
			"Integrated payment gateways and supply chain tools, enhancing transaction tracking and driving a 50% increase in sales.",
		],
		icon: "work",
		logo: "/lt.png",
	},
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
			"Collaborated cross-functionally with design and QA teams to ensure compliance with insurance data regulations and improve overall system adoption",
		],
		icon: "work",
		logo: "/accenture.png",
	},
];

const Journey = () => {
	const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
	const [activeStep, setActiveStep] = useState(0);
	const sectionRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<HTMLDivElement>(null);

	// Calculate progressive line width
	const lineWidth =
		visibleSteps.length > 1
			? ((visibleSteps.length - 1) / (journeySteps.length - 1)) * 100
			: 0;

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Animate from left to right (past to present)
						journeySteps.forEach((_, index) => {
							setTimeout(() => {
								setVisibleSteps((prev) => [...prev, index]);
								setActiveStep(index);
							}, index * 800);
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
		<section id="journey" className="py-8 bg-transparent" ref={sectionRef}>
			<div className="w-full">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">
					My Journey
				</h2>

				{/* Mobile: Vertical Layout */}
				<div className="md:hidden space-y-6">
					{journeySteps.map((step, idx) => {
						const isVisible = visibleSteps.includes(idx);
						return (
							<div
								key={idx}
								className={`relative pl-12 transition-all duration-700 ${
									isVisible
										? "opacity-100 translate-x-0"
										: "opacity-0 -translate-x-8"
								}`}
								style={{ transitionDelay: `${idx * 800}ms` }}
							>
								{/* Vertical line for mobile */}
								{idx !== journeySteps.length - 1 && (
									<div className="absolute left-5 top-12 w-0.5 h-full bg-blue-200 dark:bg-blue-900">
										<div
											className={`w-full bg-blue-500 dark:bg-blue-400 transition-all duration-1000 ${
												isVisible ? "h-full" : "h-0"
											}`}
											style={{ transitionDelay: `${idx * 800 + 400}ms` }}
										/>
									</div>
								)}

								{/* Icon */}
								<div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-blue-400 flex items-center justify-center shadow-lg">
									{step.icon === "education" ? (
										<GraduationCap className="w-5 h-5 text-blue-500" />
									) : (
										<Briefcase className="w-5 h-5 text-blue-500" />
									)}
								</div>

								{/* Card */}
								<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
									<div className="flex items-center justify-between mb-2">
										<span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
											{step.period}
										</span>
										{step.logo && (
											<img
												src={step.logo}
												alt="Company"
												className={`w-8 h-8 object-contain ${
													step.logo.includes("lt")
														? "invert dark:invert-0"
														: ""
												}`}
											/>
										)}
									</div>
									<h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
										{step.title}
									</h3>
									<p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
										{step.org}
									</p>
									{step.project && (
										<p className="text-xs text-blue-500 dark:text-blue-400 mb-2">
											{step.project}
										</p>
									)}
									<ul className="space-y-1">
										{step.details.slice(0, 2).map((detail, i) => (
											<li
												key={i}
												className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2"
											>
												<span className="inline-block w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
												<span>{detail}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						);
					})}
				</div>

				{/* Desktop: Horizontal Timeline */}
				<div className="hidden md:block">
					<div className="relative pt-16">
						{/* Horizontal timeline line */}
						<div
							ref={timelineRef}
							className="absolute left-0 top-8 w-full h-1 bg-blue-100 dark:bg-blue-900 rounded-full"
						>
							<div
								className="h-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full transition-all duration-1000 ease-in-out relative"
								style={{ width: `${lineWidth}%` }}
							>
								{/* Moving dot */}
								<div
									className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-blue-400 shadow-lg transition-opacity duration-500 ${
										lineWidth === 100 ? "opacity-0" : "opacity-100"
									}`}
								/>
							</div>
						</div>

						{/* Timeline steps */}
						<div className="grid grid-cols-3 gap-8">
							{journeySteps.map((step, idx) => {
								const isVisible = visibleSteps.includes(idx);
								const isActive = activeStep >= idx;

								return (
									<div key={idx} className="relative">
										{/* Milestone dot: only show when card is visible */}
										<div className="absolute left-1/2 -translate-x-1/2 -top-12 z-10">
											<div
												className={`w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-4 flex items-center justify-center transition-all duration-500 ${
													isVisible
														? "border-blue-500 dark:border-blue-400 scale-100 opacity-100 shadow-xl shadow-blue-500/50"
														: "border-gray-300 dark:border-gray-700 scale-75 opacity-0"
												}`}
												style={{ transitionDelay: `${idx * 800}ms` }}
											>
												{step.icon === "education" ? (
													<GraduationCap className="w-6 h-6 text-blue-500" />
												) : (
													<Briefcase className="w-6 h-6 text-blue-500" />
												)}
											</div>
										</div>

										{/* Period label above dot */}
										<div
											className={`absolute left-1/2 -translate-x-1/2 -top-20 text-center transition-all duration-500 ${
												isVisible
													? "opacity-100 -translate-y-0"
													: "opacity-0 translate-y-4"
											}`}
											style={{ transitionDelay: `${idx * 800 + 200}ms` }}
										>
											<span className="text-sm font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
												{step.period}
											</span>
										</div>

										{/* Card below timeline */}
										<div
											className={`mt-8 transition-all duration-700 ${
												isVisible
													? "opacity-100 translate-y-0"
													: "opacity-0 translate-y-8"
											}`}
											style={{ transitionDelay: `${idx * 800 + 400}ms` }}
										>
											<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
												<div className="flex items-center justify-between mb-1">
													<span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
														{step.fullPeriod}
													</span>
													{step.logo && (
														<img
															src={step.logo}
															alt="Company"
															className={`w-8 h-8 object-contain ml-2 flex-shrink-0 ${
																step.logo.includes("lt")
																	? "invert dark:invert-0"
																	: ""
															}`}
															style={{ alignSelf: "flex-start" }}
														/>
													)}
												</div>
												<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
													{step.title}
												</h3>
												<p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
													{step.org}
												</p>
												{step.project && (
													<p className="text-xs text-blue-500 dark:text-blue-400 mb-3 line-clamp-2">
														{step.project}
													</p>
												)}
												<ul className="space-y-2">
													{step.details.slice(0, 3).map((detail, i) => (
														<li
															key={i}
															className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2"
														>
															<span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 flex-shrink-0" />
															<span className="line-clamp-2">{detail}</span>
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
			</div>
		</section>
	);
};

export default Journey;