import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Judicial Complaint Portal",
    description:
      "A full-stack MERN web app for filing and tracking judicial complaints with role-based access, authentication, and admin dashboard.",
    image: "/assets/Judial.png",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/judicial-portal",
  },
  {
    id: 2,
    title: "NGO Website",
    description:
      "A responsive NGO website inspired by Tata Trusts featuring donations (QR & standard), events, media, and SEO optimization.",
    image: "/assets/NGO.png",
    tags: ["Next.js", "TailwindCSS", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/ngo-website",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and experience with animations, dark/light themes, and responsive design.",
    image: "/assets/portfolioImg.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve built recently. Each project
          focuses on clean UI, strong backend, and real-world usability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="aurora-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/UmashankarAhirwar20"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
