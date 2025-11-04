import { H1, H3, P } from "@/components/ui/typography";
import { Calendar, ChevronRight, GraduationCap, MapPin } from "lucide-react";

export default function ExperienceSection() {
    const experiences = [{
        jobName: "Full Stack Developer",
        type:"Internship",
        company:"IMFA SOLUTIONS",
        duration:"June 2023 - August 2023",
        location:"Casablanca, Morocco (Remote)",
        rools: [
                    "Contributed to the development of a Point of Sale (POS) system, focusing on building a clean and responsive front-end using React and shadcn/ui.",
                    "Implemented efficient state management with Zustand, improving performance and ensuring smooth user interactions.",
                    "Designed and documented UML diagrams (use case, sequence, and class) to establish a clear, scalable architecture.",
                    "Collaborated within a team of four developers to integrate and refine the user interface, enhancing overall usability and consistency.",
                ]
    }]
    return (
        <div id="experience" className="w-full flex flex-col items-center py-14 sm:py-16 md:py-20">
            <div className="w-full px-3 sm:px-6 md:container">
                <H1 className="text-primary font-fira text-center mb-10 underline underline-offset-8">
                    Experience
                </H1>


                    {experiences.map((experience)=>(
                        <div className="bg-[#141517] border border-[#0a824b] md:border-[#27292c] hover:border-[#008f00] rounded-xl p-4 sm:p-5 mb-6 md:ml-7 transition-colors relative">
                            <P className="dark:bg-primary p-1 rounded-full absolute top-3 hidden md:block -left-6"></P>
                            <div className="md:flex md:justify-between md:items-center gap-5">
                                <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="bg-primary/10 p-3 border border-primary/20 rounded-lg flex items-center justify-center">
                                        <GraduationCap size={30} className="dark:text-primary" />
                                    </div>
                                    <div>
                                        <div className="sm:flex sm:items-center sm:gap-3">
                                            <H3 className="font-fira text-base sm:text-lg">{experience.jobName}</H3>
                                            <span className="dark:text-primary dark:bg-primary/10 px-2 py-0.5 text-[10px] sm:text-xs font-mono rounded-sm border border-primary/30">
                                                {experience.type}
                                            </span>
                                        </div>
                                        <span className="text-primary font-mono text-sm sm:text-base">
                                            {experience.company}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 md:mt-0 text-sm sm:text-base">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Calendar className="dark:text-[#7f8489]" />
                                        <span className="dark:text-[#7f8489]">{experience.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="dark:text-[#7f8489]" />
                                        <span className="dark:text-[#7f8489]">{experience.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5">
                                <P className="text-lg text-foreground mb-3">Key Achievements:</P>
                                <ul className="flex flex-col gap-2">
                                    {experience.rools.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-justify">
                                            <ChevronRight size={20} className="dark:text-primary shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
