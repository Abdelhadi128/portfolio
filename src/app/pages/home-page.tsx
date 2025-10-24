import Footer from "@/components/layouts/footer";
import NavBar from "@/components/layouts/navbar";
import AboutSection from "@/components/screens/home/about-section";
import ContactSection from "@/components/screens/home/contact-section";
import HomeSection from "@/components/screens/home/home-section";
import ProjectsSection from "@/components/screens/home/projects-section";
// import TeckStackSection from "@/components/screens/home/teck-stack-section";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {

    const homeRef = useRef(null);
    // const teckRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const navElements = [
        { path: "/", element: "Home", ref: homeRef },
        { path: "/about", element: "About", ref: aboutRef },
        // { path: "/teck", element: "Tech Stack", ref: teckRef },
        { path: "/projects", element: "Projects", ref: projectsRef },
        { path: "/contact", element: "Contact", ref: contactRef },
    ];

    const scrollToSection = (ref: any) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="bg-black h-full">
            <NavBar navElements={navElements} scrollToSection={scrollToSection} homeRef={homeRef}/>
            <HomeSection homeRef={homeRef}/>
            <AboutSection aboutRef={aboutRef}/>
            {/* <TeckStackSection teckRef={teckRef}/> */}
            <ProjectsSection projectsRef={projectsRef}/>
            <ContactSection contactRef={contactRef}/>
            <Footer/>
        </main>
    )
}
