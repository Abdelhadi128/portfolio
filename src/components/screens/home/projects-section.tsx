import { Button } from "@/components/ui/button";
import { H3, P, H1 } from "@/components/ui/typography";
import projects from "@/data/projects.json";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // stagger animation smoothly
    }
  }
};

const cardVariants:Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ProjectsSection() {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex flex-col justify-center items-center py-20 overflow-hidden"
    >
      <div className="w-full mx-1 md:container">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <H1 className="text-primary font-fira text-center mb-10 underline underline-offset-9">
            Featured Projects
          </H1>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="w-full flex flex-col gap-7 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 sm:p-5 md:p-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="
                  w-full flex flex-col h-full 
                  border rounded-xl 
                  bg-card 
                  border-border 
                  hover:border-primary 
                  transition-colors duration-300
                  overflow-hidden
                "
              >
                <img
                  src={project.image}
                  alt="No image available"
                  className="
                    object-cover 
                    w-full h-45
                    transition-transform duration-300
                    hover:scale-[1.05]
                  "
                />

                <div className="flex flex-col flex-1 mx-3 my-4">
                  <P className="m-0 font-serif text-lg font-semibold text-foreground">
                    {project.name}
                  </P>

                  <div className="flex-grow">
                    <P className="text-muted-foreground">{project.description}</P>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap my-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="
                          px-2 py-0.5
                          text-primary 
                          dark:bg-primary/20 
                          dark:hover:bg-primary/10 
                          bg-primary/10 
                          font-mono 
                          rounded-sm 
                          border 
                          border-primary/30 
                          text-sm
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center items-center gap-2">
                    <Button className="flex-1 cursor-pointer">
                      <SquareArrowOutUpRight /> Live Demo
                    </Button>

                    <Button
                      variant="outline"
                      className="
                        cursor-pointer 
                        dark:bg-background 
                        dark:hover:text-primary 
                        text-foreground
                      "
                    >
                      <Github />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="w-full py-8">
              <H3 className="text-red-600 font-fira">
                No projects available at the moment.
              </H3>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
