import { H1, P } from '@/components/ui/typography';
import { Github, Linkedin, Mail, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function ContactSection() {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const contacts = [
        {
            name: "GitHub",
            username: "@Abdelhadi128",
            link: "https://github.com/Abdelhadi128",
            icon: <Github size={32} className='text-primary transition-transform group-hover:scale-110' />,
            description: "Check out my repositories"
        },
        {
            name: "LinkedIn",
            username: "Abdelhadi Nachit",
            link: "https://www.linkedin.com/in/abdelhadi-nachit",
            icon: <Linkedin size={32} className='text-primary transition-transform group-hover:scale-110' />,
            description: "Let's connect professionally"
        },
        {
            name: "Email",
            username: "abdelhadi.nachit.dev@gmail.com",
            link: "mailto:abdelhadi.nachit.dev@gmail.com",
            icon: <Mail size={32} className='text-primary transition-transform group-hover:scale-110' />,
            description: "Drop me a message",
            copyable: true
        }
    ];

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <motion.section 
            id='contact'
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className='w-full min-h-screen flex flex-col items-center justify-center md:py-20 md:scroll-mt-20'
        >
            <section 
                id='contact' 
                className='w-full min-h-screen flex flex-col items-center justify-center py-20 scroll-mt-20'
            >
                <div className='md:container h-full py-6 flex flex-col items-center px-5 md:px-0'>
                    <div className='w-full md:w-9/12 flex flex-col'>
                        {/* Header */}
                        <H1 className='text-primary font-fira text-center mb-4 underline decoration-primary/50 underline-offset-8'>
                            Let's Work Together
                        </H1>
                        
                        <p className='text-muted-foreground text-center text-lg md:text-xl mb-4 leading-relaxed'>
                            I'm always open to discussing new projects, opportunities, and collaborations.
                        </p>
                        
                        <p className='text-muted-foreground text-center text-sm mb-12'>
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        {/* Contact Cards */}
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12'>
                            {contacts.map((contact, index) => (
                                <div 
                                    key={index}
                                    className='group relative flex flex-col bg-card p-6 border border-border hover:border-primary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
                                >
                                    {/* Background Gradient */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                    
                                    {/* Content */}
                                    <div className='relative z-10 flex flex-col items-center text-center'>
                                        {/* Icon Container */}
                                        <div className='mb-4 p-4 bg-primary/10 border border-primary/20 rounded-full group-hover:bg-primary/20 transition-colors'>
                                            {contact.icon}
                                        </div>
                                        
                                        {/* Name */}
                                        <P className='text-foreground font-semibold text-lg mb-1'>
                                            {contact.name}
                                        </P>
                                        
                                        {/* Username/Email */}
                                        <P className='text-muted-foreground text-sm mb-2 break-all'>
                                            {contact.username}
                                        </P>
                                        
                                        {/* Description */}
                                        <P className='text-muted-foreground text-xs mb-4'>
                                            {contact.description}
                                        </P>
                                        
                                        {/* Action Buttons */}
                                        <div className='flex gap-2 w-full'>
                                            <a
                                                href={contact.link}
                                                target={contact.name !== "Email" ? "_blank" : undefined}
                                                rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                                                className='flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-colors text-sm font-medium'
                                            >
                                                {contact.name === "Email" ? "Send Email" : "Visit"}
                                                <ExternalLink size={14} />
                                            </a>
                                            
                                            {contact.copyable && (
                                                <button
                                                    onClick={() => copyToClipboard(contact.username)}
                                                    className='p-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-colors'
                                                    aria-label='Copy email address'
                                                    title='Copy email'
                                                >
                                                    {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional CTA */}
                        <div className='w-full bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-xl p-8 text-center'>
                            <P className='text-foreground text-lg mb-2'>
                                Have a project in mind?
                            </P>
                            <P className='text-muted-foreground text-sm mb-6'>
                                Let's discuss how we can work together to bring your ideas to life
                            </P>
                            <a 
                                href="mailto:abdelhadi.nachit.dev@gmail.com"
                                className='inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105'
                            >
                                <Mail size={20} />
                                Get in Touch
                            </a>
                        </div>

                        {/* Quick Info */}
                        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left'>
                            <div className='p-4 bg-card border border-border rounded-lg'>
                                <P className='text-muted-foreground text-sm mb-1'>Response Time</P>
                                <P className='text-foreground font-semibold'>Within 24 hours</P>
                            </div>
                            <div className='p-4 bg-card border border-border rounded-lg'>
                                <P className='text-muted-foreground text-sm mb-1'>Availability</P>
                                <P className='text-foreground font-semibold'>Open to opportunities</P>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.section>
    );
}