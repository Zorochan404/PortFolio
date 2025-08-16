"use client";

import { useEffect, useState } from "react";
import { OrbLoader } from "@/component/layout/loader";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500); // Adjust timing as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && <OrbLoader />}
            <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </>
    );
}