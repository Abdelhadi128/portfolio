import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/navbar";
import AboutSection from "@/components/screens/home/about-section";
import CertificatesSection from "@/components/screens/home/certificates-section";
import ContactSection from "@/components/screens/home/contact-section";
import ExperienceSection from "@/components/screens/home/experience-section";
import HomeSection from "@/components/screens/home/home-section";
import ProjectsSection from "@/components/screens/home/projects-section";
import TeckStackSection from "@/components/screens/home/teck-stack-section";
import path from "path";
import { useRef } from "react";

export default function HomePage() {

    const homeRef = useRef<HTMLDivElement | null>(null);
    // const teckRef = useRef(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const navElements = [
        { path: "/", element: "Home", ref: homeRef },
        { path: "/about", element: "About", ref: aboutRef },
        // { path: "/teck", element: "Tech Stack", ref: teckRef },
        {path: '/skiles', element: 'Skiles', ref: null},
        { path: "/projects", element: "Projects", ref: projectsRef },
        { path: "/certificates", element: "Certificates", ref: contactRef },
        {path: '/experience', element: 'Experience', ref: null},
        { path: "/contact", element: "Contact", ref: contactRef },
    ];

    return (
        <main className="bg-accent dark:bg-black h-full">
            <NavBar navElements={navElements} />
            <HomeSection />
            <AboutSection />
            <TeckStackSection />
            <ProjectsSection />
            <CertificatesSection/>
            <ExperienceSection />
            <ContactSection />
            <Footer />
        </main>
        // h-screen overflow-y-auto scrollbar-thin scrollbar-hover:w-20 scrollbar-track-primary/10 scrollbar-thumb-primary
    )
}
