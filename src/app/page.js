import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
