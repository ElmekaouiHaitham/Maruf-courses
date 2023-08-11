"use client";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Example from "@/components/contact";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="flex min-h-screen flex-col items-center justify-between pt-24">
        <Navbar />
        <ProjectsSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
