"use client"

import CurvedLoop from "@/component/layout/curvedloop"

export default function About() {

    const skills = {
        Languages: ["Dart", "JavaScript", "Python", "Go"],
        Databases: [
            "MongoDB",
            "DynamoDB",
            "SQL",
            "QdrantDB",
            "Neondb",
            "Pinecone",
            "PGVector",
            "PostgreSQL",
            "Redis",
        ],
        Frameworks: ["Express.js", "React.js", "Langchain.js", "Node.js", "Flutter", "Next.js", "React-Native",],
        "Tools & Technologies": [
            "Git",
            "REST API",
            "GraphQL",
            "Serverless",
            "WebSockets",
            "Vercel",
            "VS Code",
            "Figma",
            "Render"
        ],
    };


    return (
        <div className="flex flex-col items-start justify-start pt-24 lg:pt-36 mx-4 lg:mx-0">
            <div className="text-2xl font-bold">About~</div>
            <br />
            <div className="text-md">
                I am a dedicated Full Stack Developer with expertise in modern web technologies and a passion for creating scalable, user-centric applications. My technical proficiency spans both frontend and backend development, enabling me to deliver comprehensive solutions that meet complex business requirements.
            </div>
            <br />
            <div className="text-lg font-bold">
                Technical Expertise
            </div>
            <br />
            <div className="text-md">
                My core competencies include JavaScript/TypeScript development with React.js and Next.js for creating responsive, high-performance user interfaces. On the backend, I leverage Node.js and Express.js to build robust APIs and server-side applications. I have extensive experience working with both SQL and NoSQL databases, including PostgreSQL and MongoDB, with proficiency in modern ORMs like Drizzle for efficient data management.
                Currently expanding my skill set with Go programming language to enhance my capabilities in building high-performance backend systems. I also have experience in mobile application development using Flutter, allowing me to create cross-platform solutions that maintain consistency across web and mobile platforms.
            </div>
            <br />
            <div className="text-lg font-bold">
                Skills~
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="mb-6">
                        <h3 className="text-lg font-medium mb-4 text-zinc-200">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillList.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3.5 py-1.5 bg-stone-800/80 text-zinc-200 text-sm rounded-full hover:bg-stone-700/90 transition-all duration-200 hover:shadow-md"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <br />

            <div className="w-full h-fit ">
                <CurvedLoop
                    marqueeText="JavaScript ✦ TypeScript ✦ Go ✦ React ✦ MongoDB ✦ SQL ✦ Node.js ✦ Express.js ✦ Drizzle ✦ Flutter ✦ Next.js ✦ Tailwind CSS ✦ Redis ✦ GraphQL ✦ WebSockets ✦ Serverless ✦ Vercel ✦ VS Code ✦ Figma ✦ Render ✦"
                    speed={1}
                    curveAmount={0}
                    direction="left"
                    interactive={true}
                    className=""
                />
            </div>
        </div>
    )
}
