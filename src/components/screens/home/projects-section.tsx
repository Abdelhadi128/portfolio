import { Button } from "@/components/ui/button";
import { H3, P, H1 } from "@/components/ui/typography";
import projects from '@/data/projects.json';
import { Github, SquareArrowOutUpRight } from "lucide-react";
import type React from "react";

type projectProps = {
    projectsRef: React.RefObject<HTMLDivElement | null>
}

export default function ProjectsSection({projectsRef}: projectProps) {
  return (
    <div ref={projectsRef} className="w-full h-full bg-black flex flec-col justify-center pb-5">
        <div className="w-full mx-1 md:container">
          <H1 className="text-primary font-fira text-center my-10 underline underline-offset-9">Featured Projects</H1>
          {/* <P className="text-[#e4e4e7] font-poppins">A selection of projects demonstrating full-stack development expertise</P> */}
          <div className="w-full flex flex-col gap-7 mt-6 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 sm:p-5 md:p-0">
            {projects.length > 0 ? projects.map((project, index) => (
              <div key={index} className="w-full flex flex-col h-full border rounded-xl bg-[#141517] border-[#0a824b] md:border-[#27292c] hover:border-[#008f00] overflow-hidden">
                <img src={project.image} alt="No image available" className="object-cover transition-transform duration-300 transform hover:scale-110 w-full h-45 flex flex-col items-center justify-center"/>
                <div className="flex flex-col flex-1 mx-3 my-4">
                  <P className="text-[#e4e4e7] m-0 font-fira">{project.name}</P>
                  <div className="flex-grow">
                    <P className="text-[#7f8489]">{project.description}</P>
                  </div>
                  <div className="flex gap-2 flex-wrap my-6 ">
                    {project.tags.length > 0 && project.tags.map((tag)=>(
                      <span className="p-1 text-primary rounded-lg border border-primary text">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Button className="flex-1 cursor-pointer"><SquareArrowOutUpRight /> Live Demo</Button>
                    <Button className="cursor-pointer"><Github /></Button>
                  </div>
                </div>
              </div>
            )) : <div className="w-full py-8">
                <H3 className="text-red-600 font-fira">No projects available at the moment.</H3>
              </div>}
          </div>
        </div>
    </div>
  )
}
