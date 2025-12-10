import { H1, P } from '@/components/ui/typography';
import { Database, Terminal, Zap } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function AboutSection() {
    const skills = [
        {
            title: "Problem Solving",
            description: "Breaking down complex challenges into elegant, efficient solutions.",
            icon: <Terminal size={40} className='text-primary bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/30 transition-all duration-300' />
        },
        {
            title: "Performance",
            description: "Optimizing applications for speed, efficiency, and user experience.",
            icon: <Zap size={40} className='text-primary bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/30 transition-all duration-300' />
        },
        {
            title: "Architecture",
            description: "Designing systems that scale from MVP to enterprise-level.",
            icon: <Database size={40} className='text-primary bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/30 transition-all duration-300' />
        },
    ];

    const containerVariants:Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants:Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            id='about' 
            className='w-full min-h-screen md:h-screen flex flex-col items-center mt-10 md:py-20 scroll-mt-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className='md:container flex flex-col h-full px-5 md:px-0'>
                <motion.div variants={itemVariants}>
                    <H1 className='text-center text-primary font-fira underline decoration-primary/50 underline-offset-8 mb-8'>
                        About Me
                    </H1>
                </motion.div>

                <div className='flex-1 w-full flex flex-col justify-center items-center'>
                    {/* Main Description */}
                    <motion.div 
                        className='md:w-9/12 md:font-fira md:text-lg text-justify flex flex-col text-foreground bg-card border border-border hover:border-primary/50 transition-all duration-300 p-5 md:p-8 rounded-xl shadow-lg leading-relaxed'
                        variants={itemVariants}
                    >
                        <p className='mb-4'>
                            Building scalable applications that address real-world issues is my passion as a full-stack developer. 
                            My main areas of expertise are creating clear, maintainable code and designing systems that can expand 
                            to meet changing business requirements.
                        </p>
                        <p>
                            With experience in cloud infrastructure, back-end services, and front-end frameworks, I approach every 
                            project holistically, from conception to production deployment.
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div 
                        className='md:w-9/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'
                        variants={containerVariants}
                    >
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                className='group border-2 border-purple-500/20 p-6 bg-card rounded-xl md:border md:border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1'
                            >
                                <div className='mb-4'>
                                    {skill.icon}
                                </div>
                                <P className='text-foreground font-semibold text-lg mb-2'>
                                    {skill.title}
                                </P>
                                <P className='text-muted-foreground text-sm leading-relaxed'>
                                    {skill.description}
                                </P>
                            </div>
                        ))}
                    </motion.div>

                    {/* Stats Section */}
                    {/* <motion.div 
                        className='md:w-9/12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'
                        variants={containerVariants}
                    >
                        {[
                            { label: "Years Experience", value: "2+" },
                            { label: "Projects Completed", value: "15+" },
                            { label: "Technologies", value: "20+" },
                            { label: "Certifications", value: "4+" },
                        ].map((stat, index) => (
                            <motion.div 
                                key={index}
                                className='text-center p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300'
                                variants={itemVariants}
                            >
                                <div className='text-2xl md:text-3xl font-bold text-primary mb-1'>
                                    {stat.value}
                                </div>
                                <div className='text-xs md:text-sm text-muted-foreground'>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div> */}
                </div>
            </div>
        </motion.section>
    );
}