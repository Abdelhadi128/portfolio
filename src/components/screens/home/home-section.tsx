import { H1, H3, P } from "@/components/ui/typography";
import { ArrowDownToLine, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { SparkleParticles } from '@/components/ui/sparkle-particles';
import { useTheme } from "@/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomeSection() {
    const { theme } = useTheme();

    const socialLinks = [
        { 
            name: "GitHub", 
            url: "https://github.com/Abdelhadi128", 
            icon: <Github className="w-5 h-5" /> 
        },
        { 
            name: "LinkedIn", 
            url: "https://www.linkedin.com/in/abdelhadi-nachit", 
            icon: <Linkedin className="w-5 h-5" /> 
        },
        { 
            name: "Email", 
            url: "mailto:abdelhadi.nachit.dev@gmail.com", 
            icon: <Mail className="w-5 h-5" /> 
        },
    ];

    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="min-h-screen w-full flex flex-col items-center justify-center relative"
        >
            <section 
                id="home" 
                className="min-h-screen w-full flex flex-col items-center justify-center relative"
            >
                {/* Particle Background */}
                <SparkleParticles 
                    className="w-full h-full absolute top-0 left-0 z-0" 
                    maxParticleSize={2} 
                    particleColor={theme === 'dark' ? "#00FF88" : "#000000"}
                />

                <div className="min-h-full flex-1 container md:flex md:items-center md:justify-around px-5 md:px-0 flex flex-col md:flex-row gap-10 z-10 pb-20 pt-5 md:pb-0 md:pt-0 py-20">

                    {/* Mobile Profile Image */}
                    <div className="md:mt-0 flex md:hidden items-center justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                            <img 
                                src="/images/profile.jpg" 
                                alt="Abdelhadi Nachit - Full Stack Developer" 
                                className="relative z-40 w-32 h-32 md:w-64 md:h-64 rounded-full object-cover ring-4 ring-border"
                                loading="eager"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-4 flex-wrap items-center md:items-start max-w-full md:max-w-lg">

                        <H1 className="text-foreground font-fira z-10 text-center md:text-start lg:text-6xl">
                            <span className="text-foreground">Hi, I'm </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                                Abdelhadi Nachit
                            </span>
                        </H1>

                        <H3 className="text-muted-foreground font-fira z-10 lg:text-3xl">
                            Full Stack Developer 
                        </H3>

                        <P className="text-muted-foreground font-fira text-justify lg:text-lg leading-relaxed">
                            I create beautiful, functional, and user-centered digital experiences 
                            that combine thoughtful design with solid engineering. Passionate about 
                            clean, maintainable code and innovative solutions.
                        </P>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="
                                        p-3 
                                        bg-card 
                                        border 
                                        border-border 
                                        hover:border-primary 
                                        rounded-lg 
                                        transition-all 
                                        duration-300 
                                        hover:scale-110
                                    "
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 mt-4">
                            {/* <a href="#contact">
                                <Button 
                                    size="lg" 
                                    className="font-medium"
                                >
                                    Get in Touch
                                </Button>
                            </a> */}
                            <a href="/cv.pdf" download={true}>
                                <Button 
                                        size="lg" 
                                        className="font-medium text-white flex justify-center items-center"
                                    >
                                    Download CV
                                    <ArrowDownToLine className="size-5"/>
                                </Button>
                            </a>
                            <a href="#projects">
                                <Button 
                                    size="lg"
                                    variant="outline"
                                    className="font-medium border-primary hover:bg-primary/10"
                                >
                                    View Projects
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Desktop Profile Image */}
                    <div className="mt-10 md:mt-0 hidden md:flex items-center justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                            <img 
                                src="/images/profile.jpg" 
                                alt="Abdelhadi Nachit - Full Stack Developer" 
                                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover ring-4 ring-border"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <a 
                    href="#about"
                    className="w-full flex flex-col items-center absolute bottom-8 z-10 group"
                    aria-label="Scroll to about section"
                >
                    <ChevronDown 
                        size={48} 
                        className="text-foreground animate-bounce group-hover:text-primary transition-colors" 
                    />
                </a>
            </section>
        </motion.section>
    );
}
