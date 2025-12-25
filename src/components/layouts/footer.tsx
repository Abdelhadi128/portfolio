import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/Abdelhadi128", icon: <Github size={18} /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/abdelhadi-nachit", icon: <Linkedin size={18} /> },
        { name: "Email", url: "mailto:abdelhadi.nachit.dev@gmail.com", icon: <Mail size={18} /> }
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="bg-card border-t border-border relative">
            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="container mx-auto px-5 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* About Column */}
                        <div>
                            <h3 className="text-primary font-fira text-lg mb-4">Abdelhadi Nachit</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                Full Stack Developer passionate about creating elegant solutions to complex problems.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target={link.name !== "Email" ? "_blank" : undefined}
                                        rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                                        className="p-2 bg-card border border-border hover:border-primary rounded-lg transition-all duration-300 hover:scale-110"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h3 className="text-primary font-fira text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <h3 className="text-primary font-fira text-lg mb-4">Get In Touch</h3>
                            <div className="space-y-3">
                                <a
                                    href="mailto:abdelhadi.nachit.dev@gmail.com"
                                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    abdelhadi.nachit.dev@gmail.com
                                </a>
                                <p className="text-muted-foreground text-sm">
                                    Casablanca, Morocco
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Available for freelance opportunities
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            {/* Copyright */}
                            <p className="text-muted-foreground font-mono text-sm text-center md:text-left">
                                © {new Date().getFullYear()} <span className="text-primary">Abdelhadi Nachit</span>. All rights reserved.
                            </p>

                            {/* Built With */}
                            <p className="text-muted-foreground text-sm flex items-center gap-2">
                                Built with <Heart size={16} className="text-red-500 animate-pulse" /> using React, TypeScript & Tailwind CSS
                            </p>
                        </div>

                        {/* Additional Note */}
                        <p className="text-center text-muted-foreground text-xs mt-4">
                            Designed & Developed by Abdelhadi Nachit
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}