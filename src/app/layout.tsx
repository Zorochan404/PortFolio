import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, Varela } from "next/font/google";
import "./globals.css";
import Orb from "./background";
import NavBar from "@/component/layout/header";
import Providers from "@/component/providers/sessionprovider";
import { Footer } from "@/component/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const varela = Varela({
  variable: "--font-varela",
  subsets: ["latin"],
  weight: ["400"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Jyotirmoy's Portfolio",
  description: "Jyotirmoy's Portfolio",
  icons: {
    icon: '/j.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable}`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <div className="fixed top-5 z-50 w-full lg:w-[55%] left-1/2 transform -translate-x-1/2">
              <NavBar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative w-full flex items-center justify-center">
              <div className="fixed inset-0 w-full h-full">
                <Orb
                  hoverIntensity={0.5}
                  rotateOnHover={true}
                  hue={280}
                  forceHoverState={false}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 pointer-events-none w-full h-full lg:w-[55%] flex items-start">
                {children}
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}