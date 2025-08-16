"use client";

import { useEffect, useState } from "react";

export function Footer() {
    const [formattedTime, setFormattedTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            });
            setFormattedTime(formatted);
        };

        updateTime(); // Set immediately on mount
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="flex px-4 py-4 justify-center gap-6 items-center w-full border-t border-stone-800/90">
            <div className="w-full lg:w-[55%] flex justify-between">
                <p className="leading-none m-0">made by Jyotirmoy</p>
                <p className="leading-none m-0 text-[0.90rem]">{formattedTime}</p>
            </div>
        </footer>
    );
}