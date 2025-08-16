"use client";

import { useEffect, useState } from "react";

// Option 1: Minimal Text Loader with Progress
export function MinimalLoader() {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setIsComplete(true);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    if (isComplete) return null;

    return (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
            <div className="text-center space-y-8">
                <div className="text-white text-2xl font-light tracking-wider">
                    JYOTIRMOY
                </div>
                <div className="w-64 h-[1px] bg-white/20 relative overflow-hidden">
                    <div
                        className="h-full bg-white transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="text-white/60 text-sm font-mono">
                    {Math.round(progress)}%
                </div>
            </div>
        </div>
    );
}

// Option 2: Morphing Geometric Loader
export function GeometricLoader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 z-[100] flex items-center justify-center">
            <div className="relative">
                {/* Animated circles */}
                <div className="w-32 h-32 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping" />
                    <div className="absolute inset-2 rounded-full border-2 border-blue-400/50 animate-pulse" />
                    <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-spin"
                        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                </div>

                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white text-lg font-light tracking-widest">
                    LOADING
                </div>
            </div>
        </div>
    );
}

// Option 3: Glitch Effect Loader
export function GlitchLoader() {
    const [isVisible, setIsVisible] = useState(true);
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 1500);

        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => {
            clearInterval(glitchInterval);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center overflow-hidden">
            <div className="text-center">
                <div className={`text-6xl font-bold text-white relative ${glitchActive ? 'animate-pulse' : ''}`}>
                    <span className="relative z-10">JYOTIRMOY</span>
                    {glitchActive && (
                        <>
                            <span className="absolute top-0 left-0 text-red-500 z-0 transform translate-x-1 -translate-y-0.5">JYOTIRMOY</span>
                            <span className="absolute top-0 left-0 text-blue-500 z-0 transform -translate-x-1 translate-y-0.5">JYOTIRMOY</span>
                        </>
                    )}
                </div>

                <div className="mt-8 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-white rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        />
                    ))}
                </div>
            </div>

            {/* Scan lines effect */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-0.5 bg-white"
                        style={{ marginTop: '20px' }}
                    />
                ))}
            </div>
        </div>
    );
}

// Option 4: Orb-themed Loader (matches your existing design)
export function OrbLoader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
            {/* Animated orb that matches your theme */}
            <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-spin opacity-80 blur-xl" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse opacity-60 blur-lg" />
                <div className="absolute inset-8 rounded-full bg-white animate-ping opacity-40" />

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-xl font-light tracking-wider">J</div>
                </div>
            </div>

            <div className="absolute bottom-1/3 text-white/80 text-sm font-mono animate-pulse">
                Initializing Portfolio...
            </div>
        </div>
    );
}

// Option 5: Modern Progress Circle
export function CircularLoader() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    if (!isVisible) return null;

    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-[100] flex items-center justify-center">
            <div className="text-center space-y-8">
                <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="2"
                            fill="none"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className="transition-all duration-300 ease-out"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="50%" stopColor="#EC4899" />
                                <stop offset="100%" stopColor="#3B82F6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-lg font-mono">{Math.round(progress)}%</span>
                    </div>
                </div>

                <div className="text-white/80 text-xl font-light tracking-wider">
                    JYOTIRMOY
                </div>
            </div>
        </div>
    );
}