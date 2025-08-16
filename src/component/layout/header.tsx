"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/text-1755271211288.png";

const navItems = [
    {
        path: "/about",
        name: "About",
    },
    {
        path: "/guestbook",
        name: "Guestbook",
    },
    {
        path: "/projects",
        name: "Projects",
    },
    {
        path: "/contact",
        name: "Contact",
    },
];

export default function NavBar() {
    let pathname = usePathname() || "/";



    const [hoveredPath, setHoveredPath] = useState(pathname);

    return (
        <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md mx-2 lg:mx-0">
            <nav className="flex gap-2 relative justify-between w-full z-[100]  rounded-lg lg:px-4">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            className="w-8 h-8"
                        />
                    </Link>
                </div>
                <div className="flex items-center">
                    {navItems.map((item, index) => {
                        const isActive = item.path === pathname;

                        return (
                            <Link
                                key={item.path}
                                className={`px-2 lg:px-4 py-2 rounded-md relative no-underline duration-300 ease-in ${isActive ? "text-zinc-100" : "text-zinc-400"
                                    }`}
                                data-active={isActive}
                                href={item.path}
                                onMouseOver={() => setHoveredPath(item.path)}
                                onMouseLeave={() => setHoveredPath(pathname)}
                            >
                                <span className="text-sm">{item.name}</span>
                                {item.path === hoveredPath && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                                        layoutId="navbar"
                                        aria-hidden="true"
                                        style={{
                                            width: "100%",
                                        }}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.2,
                                            stiffness: 60,
                                            damping: 9,
                                            duration: 0.3,
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}