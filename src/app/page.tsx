"use client"


import Image from "next/image";
import Galaxy from "./background";
import { useState, useEffect } from 'react';
import FallingText from "@/component/layout/fallingtext";
import CurvedLoop from "@/component/layout/curvedloop";
import TiltedCard from "@/component/layout/tiltedcard";
import CircularGallery from "@/component/layout/flowinggallery";


export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      // lg breakpoint in Tailwind is 1024px
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex flex-col lg:flex-row items-start justify-between w-full px-4 lg:px-0">
        {/* Left Side - Text Content */}
        <div className="py-24 lg:py-36">
          <div className="text-2xl">こんにちは~</div>
          <br />
          <div className=" text-md">
            <span>I'm Jyotirmoy, a Full Stack Engineer who turns </span>
            <span className="text-[#ea698b] "> Coffee</span>
            <span> into</span>
            <span className="text-[#571089]"> Magic</span>
          </div>
          <br />
          <div className="flex flex-wrap items-center text-md w-[90%]">
            <span className="text-md">22~ y/o full stack dev who got tired of choosing between frontend and backend. Started building websites to procrastinate on college assignments ~ now I'm the guy who gets genuinely excited about database optimization at 3 AM. Oh, and I actually test my code in production ~ kidding, I use staging environments like a responsible adult... most of the time.</span>
            <br />
            <span className="text-md">
              When I'm not knee-deep in code, I'm either clutching impossible tasks in MINECRAFT (my clutch might be questionable but my game sense is elite), getting absolutely wrecked in whatever new game caught my attention, or binge-watching anime.
            </span>
          </div>
        </div>

        {/* Right Side - Circular Text */}
        {isLargeScreen ? (
          <div className="lg:py-38">
            <img
              src="/me.jpg"
              alt="logo"
              width={300}
              height={300}
              className="rounded-lg w-20 h-20 lg:w-140 lg:h-auto object-cover"
            />
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full">
        <div className="text-lg text-white">Songs I am currently listening to</div>
        <div className="pointer-events-auto overflow-x-hidden w-full h-[300px] mt-[-40px]">
          <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>

      </div>


    </div>
  );
}
