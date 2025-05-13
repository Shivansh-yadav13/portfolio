import { motion } from "motion/react";
import { BackgroundBeams } from "./ui/background-beams";

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Casbin (GSoC'22)",
    position: "Software Development Contributor",
    duration: "June 2022 - September 2022",
    description: [
      "Built benchmarking infra and CI pipelines for Casbin-Core.",
      "Added cross-platform support for React.js, React Native & Angular.",
      "Contributed 30+ features/bug fixes, including batch enforcement & RBAC enhancements."
    ],
    technologies: ["React", "Golang", "Node.js", "TypeScript"]
  },
  {
    company: "Fellowship.AI",
    position: "Machine Learning Fellow",
    duration: "Jan 2024 - March 2024",
    description: [
      "Fine-tuned SDXL Turbo LoRA, boosting inference speed by 50%.",
      "Built dataset generator and published it on HuggingFace.",
      "Deployed Dockerized API using Cog for the fine-tuned model.",
      "Integrated auto/manual masking in a client-facing Next.js app."
    ],
    technologies: ["Python", "Stable Diffusion", "LoRA", "Docker", "Next.js "]
  },
  // Add more experiences here
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] relative">
      <BackgroundBeams />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#18181b] border border-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 