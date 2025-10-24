import AboutSection from "@/components/screens/home/about-section";
import ContactSection from "@/components/screens/home/contact-section";
import HomeSection from "@/components/screens/home/home-section";
import ProjectsSection from "@/components/screens/home/projects-section";
import TeckStackSection from "@/components/screens/home/teck-stack-section";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <HomeSection/>
    },
    {
        path: '/projects',
        element: <ProjectsSection/>
    },
    {
        path: '/teck',
        element: <TeckStackSection/>
    },
    {
        path: '/about',
        element: <AboutSection/>
    },
    {
        path: '/contact',
        element: <ContactSection/>
    },
    {
        path: '*',
        element: <div>NOT FOUND</div>
    }
])