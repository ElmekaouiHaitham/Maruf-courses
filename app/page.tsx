"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="flex min-h-screen flex-col items-center justify-between pt-24">
        <Navbar />
        <CoursesSection />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
