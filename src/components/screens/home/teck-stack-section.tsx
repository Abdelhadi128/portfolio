import { H3, P } from "@/components/ui/typography"
import { SquareCode } from "lucide-react"

export default function TeckStackSection() {
  // const frontend = ['HML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Tailwind CSS', 'Shadcn UI']
  // const backend = ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs']
  // const tools = ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code']
  const Skils = {
    frontend : ['HML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Tailwind CSS', 'Shadcn UI'],
    frontendIcons : ['/public/languages/Html.svg'],
    backend : ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    tools : ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code']
  }
  return (
    <div id="skiles" className="w-full min-h-screen py-20 px-5 md:px-0 flex flex-col items-center">
      <H3 className="text-center text-primary font-fira underline underline-offset-9 mb-10 text-4xl">
        Skils
      </H3>
      <div className="w-full md:container md:grid md:grid-cols-3 md:gap-5">
        <div className="w-full p-5 dark:bg-[#141517] border border-[#0a824b] md:border-[#27292c] hover:border-[#008f00] rounded-xl mb-10 relative flex flex-col justify-center">
          {/* <SquareCode className="absolute size-60 md:size-90 text-white/10" /> */}
          <H3 className="font-serif dark:text-primary/80 mb-5">&lt;Frontend/&gt;</H3>
          {Skils.frontend.map((tech, index) => (
            <div className="dark:bg-black p-2 rounded-xl flex items-center ju gap-3 mb-2" key={index}>
              <P key={index} className="font-fira font-medium">{tech}</P>
            </div>
          ))}
        </div>

        <div className="w-full p-5 dark:bg-[#141517] border border-[#0a824b] md:border-[#27292c] hover:border-[#008f00] rounded-xl mb-10">
          <H3 className="font-serif dark:text-primary/80 mb-5">&lt;Backend/&gt;</H3>
          {Skils.backend.map((tech, index) => (
            <div className="dark:bg-black p-2 rounded-xl flex items-center ju gap-3 mb-2" key={index}>
              <P key={index} className="font-fira font-medium">{tech}</P>
            </div>
          ))}
        </div>

        <div className="w-full p-5 dark:bg-[#141517] border border-[#0a824b] md:border-[#27292c] hover:border-[#008f00] rounded-xl mb-10">
          <H3 className="font-serif text-cen dark:text-primary/80 mb-5">&lt;Tools/&gt;</H3>
          {Skils.tools.map((tech, index) => (
            <div className="dark:bg-black p-2 rounded-xl flex items-center ju gap-3 mb-2" key={index}>
              <P key={index} className="font-fira font-medium">{tech}</P>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  )
}
