// src/components/Projects.tsx
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const projects = [
  {
    title: "Scrollify",
    description: "An embeddable widget to display UGC reels of e-commerce website with link to product.",
    technologies: ["React", "TypeScript", "TailwindCSS", "MongoDB", "Mux"],
    link: "https://scrollify.app",
    image: "/scrollify.png"
  },
  {
    title: "LangSynth",
    description: "Generate Synthetic Data for using LLMs to train LLMs.",
    technologies: ["NextJS", "TypeScript", "LangChain", "TailwindCSS", "OpenAI"],
    link: "https://langsynth.vercel.app",
    image: "/langsynth.png"
  },
  {
    title: "Fusion Clips AI",
    description: "AI to clip funny moments from your long twitch streams.",
    technologies: ["NextJS", "Flask", "Supabase", "Docker", "Machine Learning"],
    link: "https://github.com/Shivansh-yadav13/fca_server/tree/main",
    image: "/fusionclipsai.png"
  },
  // ...more projects
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-[#18181b] border border-gray-800 w-full sm:w-[24rem] h-auto rounded-2xl p-6 shadow-lg">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-300 text-sm max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  className="w-full mt-4"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </CardItem>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700 text-gray-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <CardItem
                  translateZ="20"
                  className="mt-4"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    View Project →
                  </a>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}