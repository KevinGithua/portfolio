import HeroSection from '@/components/HeroSection';
import ServicesComponent from '@/components/Services';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ProjectSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesComponent />
      <Skills />
      <ProjectSection />
      <Contact />
    </div>
  );
}
