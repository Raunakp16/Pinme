import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pin Me - Live IT Jobs, AI News & Performance Portal",
  description: "Pin Me is your interactive live tech portal featuring real software hiring positions in India, AI news, and real-time hardware performance monitoring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 relative selection:bg-indigo-500 selection:text-white">
        {/* Background Ambient Glowing Lights */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/25 rounded-full blur-[128px] animate-float-slow" />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] animate-float-reverse" />
          <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] animate-float-slow" />
        </div>

        {/* Floating Glass Header Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <div className="relative z-10 flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>

        {/* Glass Footer */}
        <footer className="relative z-10 w-full glass-nav mt-auto border-t border-white/10 py-6 px-4 text-center text-sm text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium text-slate-300">Pin Me Platform</span>
            </div>
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} Pin Me. Live Tech, AI Jobs & Hardware Performance Portal.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}