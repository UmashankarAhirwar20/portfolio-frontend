import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              MERN Stack Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate{" "}
              <span className="font-semibold text-primary">
                MERN Stack Developer
              </span>{" "}
              with a solid foundation in{" "}
              <span className="font-semibold">Java & Data Structures</span>. I
              enjoy building scalable, efficient, and modern web applications
              that create real-world impact.
            </p>

            <p className="text-muted-foreground">
              With a curious mindset and strong problem-solving skills, I
              continuously explore new tools and frameworks. I'm
              detail-oriented, adaptive, and love tackling challenges that push
              me to grow as a developer and innovator.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="aurora-button">
                Get In Touch
              </a>

              <a
                href="/Umashankar_Ahirwar_9309942969.pdf" // replace with your resume path
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side (Skills Cards) */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive, performant, and scalable applications
                    with the MERN stack.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Java & DSA</h4>
                  <p className="text-muted-foreground">
                    Strong background in Java programming and Data Structures,
                    enabling efficient solutions to complex problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Adaptive, detail-oriented, and passionate about solving
                    real-world challenges with innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
