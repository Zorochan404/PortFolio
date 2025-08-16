"use client";

import { useEffect, useState } from "react";

interface ToastProps {
    message: string;
    type: "success" | "error";
    isVisible: boolean;
    onClose: () => void;
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                onClose();
            }, 5000); // Auto close after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    const icon = type === "success" ? (
        <div className="w-5 h-5 text-green-400" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check-circle"><path d="M22 12a10 10 0 1 1-10-10 10.011 10.011 0 0 1 10 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
        </div>
    ) : (
        <div className="w-5 h-5 text-red-400" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-circle"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
        </div>
    );

    const bgColor = type === "success"
        ? "bg-green-900/90 border-green-700"
        : "bg-red-900/90 border-red-700";

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-2 duration-300">
            <div className={`${bgColor} border rounded-lg p-4 shadow-lg backdrop-blur-sm min-w-[300px]`}>
                <div className="flex items-start gap-3">
                    {icon}
                    <div className="flex-1">
                        <p className="text-white text-sm font-medium">
                            {type === "success" ? "Success!" : "Error"}
                        </p>
                        <p className="text-gray-300 text-sm mt-1">{message}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <div className="w-4 h-4" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
} 