import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/navbar";
import AboutSection from "@/components/screens/home/about-section";
import CertificatesSection from "@/components/screens/home/certificates-section";
import ContactSection from "@/components/screens/home/contact-section";
import ExperienceSection from "@/components/screens/home/experience-section";
import HomeSection from "@/components/screens/home/home-section";
import ProjectsSection from "@/components/screens/home/projects-section";
import TechStackSection from "@/components/screens/home/teck-stack-section";
import { useRef} from "react";

export default function HomePage() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const certificatesRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const navElements = [
        { path: "/", element: "Home", ref: homeRef },
        { path: "/about", element: "About", ref: aboutRef },
        { path: "/skills", element: "Skills", ref: skillsRef },
        { path: "/projects", element: "Projects", ref: projectsRef },
        { path: "/certificates", element: "Certificates", ref: certificatesRef },
        { path: "/experience", element: "Experience", ref: experienceRef },
        { path: "/contact", element: "Contact", ref: contactRef },
    ];

    return (
        <main className="bg-accent dark:bg-black h-full">
            <NavBar navElements={navElements}  />
            <div ref={homeRef} id="home">
                <HomeSection />
            </div>
            <div ref={aboutRef} id="about">
                <AboutSection />
            </div>
            <div ref={skillsRef} id="skills">
                <TechStackSection />
            </div>
            <div ref={projectsRef} id="projects">
                <ProjectsSection />
            </div>
            <div ref={certificatesRef} id="certificates">
                <CertificatesSection />
            </div>
            <div ref={experienceRef} id="experience">
                <ExperienceSection />
            </div>
            <div ref={contactRef} id="contact">
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}