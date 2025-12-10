import { H1, H3, P } from "@/components/ui/typography";
import { motion, type Variants } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';
export default function TechStackSection() {
    const skills = {
        frontend: [
            'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 
            'React', 'Redux', 'Tailwind CSS', 'Shadcn UI'
        ],
        backend: [
            'Laravel', 'MongoDB',
            'RESTful APIs', 'MySQL'
        ],
        // 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL',
        // 'RESTful APIs', 'GraphQL', 'MySQL'
        tools: [
            'Git', 'GitHub', 'Docker', 'Postman', 
            'VS Code'
        ]
    };

    const categories = [
        { 
            title: 'Frontend Development', 
            data: skills.frontend, 
            icon: <Code2 size={32} className="text-primary" />,
            color: 'border-blue-500/20 hover:border-blue-500'
        },
        { 
            title: 'Backend Development', 
            data: skills.backend, 
            icon: <Database size={32} className="text-primary" />,
            color: 'border-green-500/20 hover:border-green-500'
        },
        { 
            title: 'Tools & Technologies', 
            data: skills.tools, 
            icon: <Wrench size={32} className="text-primary" />,
            color: 'border-purple-500/20 hover:border-purple-500'
        }
    ];

    const containerVariants:Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants:Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardVariants:Variants  = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',            
            }
        }
    };

    return (
        <motion.section 
            id="skills" 
            className="w-full min-h-screen py-20 px-5 md:px-0 flex flex-col items-center scroll-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <H1 className="text-center text-primary font-fira underline decoration-primary/50 underline-offset-8 mb-4">
                    Technical Skills
                </H1>
                <P className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Technologies and tools I work with to build modern web applications
                </P>
            </motion.div>

            <div className="w-full md:container space-y-8">
                {categories.map((category, categoryIndex) => (
                    <motion.div 
                        key={categoryIndex}
                        className={`w-full bg-card border-2 ${category.color} transition-all duration-300 rounded-2xl p-6 md:p-8 group`}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                                {category.icon}
                            </div>
                            <H3 className="text-2xl font-fira text-foreground">
                                {category.title}
                            </H3>
                        </div>

                        {/* Skills Grid */}
                        <motion.div 
                            className="flex flex-wrap gap-3"
                            variants={containerVariants}
                        >
                            {category.data.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="px-4 py-2.5 bg-muted border border-border hover:border-primary rounded-lg font-mono text-sm text-foreground transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/20 cursor-default"
                                    variants={itemVariants}
                                    whileHover={{ y: -2 }}
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Skills Section */}
            <motion.div 
                className="w-full md:container mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="p-8 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 border border-primary/20 rounded-2xl">
                    <H3 className="text-center text-primary/90 mb-2 text-2xl font-fira">
                        Core Competencies
                    </H3>
                    <P className="text-center text-muted-foreground mb-6 text-sm">
                        Additional areas of expertise
                    </P>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Responsive Design',
                            'Web Performance',
                            'SEO Optimization',
                            'Agile/Scrum',
                            // 'CI/CD',
                            'Unit Testing',
                            'API Integration',
                            'State Management',
                            'Authentication & Security',
                            // 'Cloud Deployment',
                            // 'Version Control',
                            // 'UI/UX Design'
                        ].map((skill, index) => (
                            <motion.span 
                                key={index}
                                className="px-5 py-2.5 text-sm bg-card text-foreground border-2 border-primary/30 rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-default font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}