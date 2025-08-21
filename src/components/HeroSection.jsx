import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 ml-2 block md:inline">
              UMASHANKAR
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 ml-2 block md:inline">
              AHIRWAR
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Experienced{" "}
            <span className="font-semibold text-primary">
              MERN Stack Developer
            </span>{" "}
            with a strong <span className="font-semibold">Java & DSA</span>{" "}
            background. Detail-oriented, adaptive, and a fast learner —
            passionate about building{" "}
            <span className="text-gradient">scalable web apps</span> and solving
            complex problems.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="aurora-button">
              View My Projects
            </a>
            <a
              href="mailto:20ahirwar.umashankar@gmail.com"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-6 opacity-0 animate-fade-in-delay-5">
            <a
              href="https://github.com/UmashankarAhirwar20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/uma-ahirwar20/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="tel:+919309942969"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
