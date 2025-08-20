"use client";

import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            "id": 1,
            "name": "Inframe School Official Website",
            "description": "Built a custom CMS from scratch for efficient content management, ensuring easy updates for admins.",
            "image": "/inframe.png",
            "imageAlt": "Inframe School homepage interface with custom CMS",
            "techStack": [
                "Next.js",
                "TailwindCSS",
                "Typescript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT",
                "Vercel",
                "Git"
            ],
            "link": "https://www.inframeschool.com/",
            "github": "",
            "featured": true,
            "freelance": true
        },

        {
            id: 2,
            name: "Frint",
            description:
                "It is a platform that connects students and freshers with internships and online training programs",
            image:
                "/frint.png",
            imageAlt: "Frint",
            techStack: [
                "Next.js",
                "TailwindCSS",
                "Typescript",
                "Express.js",
                "MongoDB",
                "Node.js",
                "Git",
            ],
            link: "https://www.frint.in/",
            featured: true,
        },

        {
            id: 3,
            name: "AdventureCarz App",
            description:
                "This has three full-stack mobile apps for AdventureCarz, a car rental company. It is a platform that allows users to rent cars from the company.",
            image:
                "/adventurecarz.png",
            imageAlt: "AdventureCarz App",
            techStack: [
                "Flutter",
                "Getx",
                "cloudinary",
                "Drizzle ORM",
                "PostgreSQL",
                "Redis",
                "NeonDB",
                "Node.js",
                "Express.js",
                "Git",
            ],
            freelance: true,
            featured: false,
        },
        {
            "id": 4,
            "name": "Hear-U",
            "description": "HearU is an AI-powered mental health platform offering mood tracking, personalized wellness tasks, and peer connections.",
            "image": "/hear-u.png",
            "imageAlt": "Homepage of Hear-U",
            "techStack": [
                "Flutter",
                "Hono",
                "Drizzle ORM",
                "PostgreSQL",
                "Redis",
                "DeepSeek R1",
                "Gemini Flash 2",
                "Gemini Embedding"
            ],
            "link": "https://res.cloudinary.com/dobngibkc/video/upload/v1755368139/hearu-main_lixamr.mp4",
            "featured": false
        },

        {
            id: 5,
            name: "Lyntra E-commerce",
            description:
                "Developed a responsive and interactive website for an e-commerce platform.",
            image:
                "/Lyntra.png",
            imageAlt: "Lyntra homepage",
            techStack: [
                "Next.js",
                "TailwindCSS",
                "Typescript",
                "Git",
            ],
            link: "https://lyntra.vercel.app/",
            featured: false,
        },

    ];

    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-start justify-start py-24 lg:pt-36 mx-4 lg:mx-0">
            <div className="w-full flex flex-col justify-start px-1 mb-6">
                <h2 className="text-xl sm:text-xl font-medium">Projects ~</h2>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`border border-stone-800/90 rounded-lg overflow-hidden flex flex-col bg-stone-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-stone-900/50 ${project.featured ? "ring-1 ring-stone-600/50" : ""
                            }`}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        <div className="relative w-full h-40 cursor-pointer overflow-hidden">
                            <div className="absolute top-0 right-0 z-10 m-2">
                                {project.featured && (
                                    <span className="px-2 py-0.5 bg-stone-800/80 text-xs rounded-md text-amber-400 border border-amber-500/30 mr-2">
                                        Featured
                                    </span>
                                )}

                                {project.freelance && (
                                    <span className="px-2 py-0.5 bg-stone-800/80 text-xs rounded-md text-amber-400 border border-amber-500/30">
                                        Freelance
                                    </span>
                                )}
                            </div>
                            <img
                                src={project.image}
                                alt={project.imageAlt}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                                style={{
                                    transform:
                                        hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-70"></div>
                        </div>

                        <div className="p-4 flex flex-col gap-2 flex-grow">
                            <h3 className="text-md font-semibold text-zinc-100">
                                {project.name}
                            </h3>
                            <p className="text-xs text-zinc-300 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="mt-2">
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {project.techStack.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-1 px-2 py-0.5 bg-stone-800/70 text-xs rounded-md text-zinc-300 border border-stone-700/50"
                                        >
                                            {/* <Code size={10} className="text-zinc-400" /> */}
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-2 mt-auto pt-2 border-t border-stone-800/50">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-700/80 text-xs font-medium text-zinc-100 relative no-underline duration-300 ease-in hover:bg-stone-600/60 border border-stone-600/30 mt-2 pointer-events-auto"
                                    >
                                        {/* <ExternalLink size={12} /> */}
                                        View Live
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-transparent text-xs font-medium text-zinc-300 relative no-underline duration-300 ease-in hover:bg-stone-800/80 border border-stone-700/30 mt-2"
                                    >
                                        {/* <Github size={12} /> */}
                                        Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
