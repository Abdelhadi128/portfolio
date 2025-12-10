import { H1, H3, P } from "@/components/ui/typography";
import { Calendar, ChevronRight, Briefcase, MapPin } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function ExperienceSection() {

    const experiences = [
        {
            jobTitle: "Full Stack Developer",
            type: "Internship",
            company: "IMFA SOLUTIONS",
            duration: "June 2023 - August 2023",
            location: "Casablanca, Morocco (Remote)",
            achievements: [
                "Contributed to the development of a Point of Sale (POS) system, focusing on building a clean and responsive front-end using React and shadcn/ui.",
                "Implemented efficient state management with Zustand, improving performance and ensuring smooth user interactions.",
                "Designed and documented UML diagrams (use case, sequence, and class) to establish a clear, scalable architecture.",
                "Collaborated within a team of four developers to integrate and refine the user interface, enhancing overall usability and consistency.",
            ],
            technologies: ["React", "TypeScript", "Zustand", "Shadcn UI", "UML"]
        }
    ];

    // ✨ Animation Variants
    const container:Variants = {
        hidden: { opacity: 0, y: 80 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                staggerChildren: 0.25,
            }
        }
    };

    const card = {
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0 }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <motion.section
            id="experience"
            className="w-full min-h-screen flex flex-col items-center py-20 scroll-mt-20"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-150px" }}
        >
            <div className="w-full px-5 md:container">
                
                <motion.div variants={card}>
                    <H1 className="text-primary font-fira text-center mb-4 underline decoration-primary/50 underline-offset-8">
                        Experience
                    </H1>
                    <P className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Professional journey and key achievements
                    </P>
                </motion.div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical Timeline Line */}
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            variants={card}
                            className="relative bg-card border border-border hover:border-primary rounded-xl p-6 mb-8 md:ml-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
                        >
                            {/* Dot */}
                            <div className="hidden md:block absolute -left-[34px] top-8">
                                <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-background"></div>
                            </div>

                            {/* Header */}
                            <div className="md:flex md:justify-between md:items-start gap-6 mb-6">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="bg-primary/10 p-3 border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Briefcase size={28} className="text-primary" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <H3 className="font-fira text-xl text-foreground group-hover:text-primary transition-colors">
                                                {experience.jobTitle}
                                            </H3>
                                            <span className="text-primary bg-primary/10 px-3 py-1 text-xs font-mono rounded-md border border-primary/30">
                                                {experience.type}
                                            </span>
                                        </div>
                                        <p className="text-primary font-semibold text-lg">
                                            {experience.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Duration & Location */}
                                <div className="mt-4 md:mt-0 space-y-2">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar size={18} />
                                        <span className="text-sm">{experience.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin size={18} />
                                        <span className="text-sm">{experience.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div className="mt-6">
                                <P className="text-lg text-foreground font-semibold mb-4">
                                    Key Achievements:
                                </P>

                                <ul className="space-y-3">
                                    {experience.achievements.map((achievement, i) => (
                                        <motion.li
                                            key={i}
                                            variants={item}
                                            className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                                        >
                                            <ChevronRight size={20} className="text-primary mt-0.5" />
                                            <span className="text-sm">{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            {experience.technologies.length > 0 && (
                                <motion.div
                                    variants={item}
                                    className="mt-6 pt-6 border-t border-border"
                                >
                                    <P className="text-sm text-muted-foreground mb-3">
                                        Technologies Used:
                                    </P>

                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs text-primary bg-primary/10 border border-primary/30 rounded-md hover:bg-primary/20 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* FINAL CARD */}
                <motion.div
                    variants={card}
                    className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-transparent border border-primary/30 rounded-xl text-center"
                >
                    <P className="text-foreground mb-2">
                        Open to new opportunities
                    </P>
                    <P className="text-muted-foreground text-sm">
                        Looking for full-time positions as a Full Stack Developer
                    </P>
                </motion.div>

            </div>
        </motion.section>
    );
}
