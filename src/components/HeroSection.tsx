import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 bg-background text-foreground transition-colors duration-300 min-h-[calc(100vh-var(--navbar-height))]">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-primary text-4xl sm:text-6xl">Kevin Njuguna</span>
        </h1>

        <div className="flex flex-col gap-4 flex-grow sm:flex-row items-center justify-center text-base font-semibold sm:text-2xl mb-6 leading-relaxed">
          <span>Web Developer</span>
          <span className="text-accent">||</span>
          <span>Full-Stack Software Engineer</span>
          <span className="text-accent">||</span>
          <span>AI Enthusiast</span>
        </div>

        <p className="mb-8 text-sm sm:text-lg">
          Specialized in creating seamless web applications using React, Next.js, and Python. Passionate about driving innovation and elevating user experiences through full-stack solutions.
        </p>

        <div className="flex justify-center space-x-10 text-xl sm:text-2xl mb-8">
          <a href="https://github.com/kevingithub" target="_blank" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kevinlinkedin" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:githuakevinnjuguna@gmail.com" target="_blank" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-10 sm:mt-16">
          <a href="/projects" className="p-3 sm:px-6 sm:py-3 text-sm sm:text-lg text-accent font-bold rounded-lg shadow-lg transition-all transform hover:bg-none hover:border-2 hover:border-primary hover:scale-105 hover:text-primary-color">
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
