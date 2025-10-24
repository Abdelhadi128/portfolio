import { H1, P } from '@/components/ui/typography'
import { Database, Terminal, Zap } from 'lucide-react'
import type React from 'react'

type aboutProps= {
    aboutRef:  React.RefObject<HTMLDivElement>
}

export default function AboutSection({aboutRef}: aboutProps) {
    console.log(aboutRef)
    const skils = [
            {title: "Problem Solving",description: "Breaking down complex challenges into elegant, efficient solutions." , icon: <Terminal size={40} className='text-primary bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/30'/>},
            {title: "Performance",description: "Optimizing applications for speed, efficiency, and user experience." , icon: <Zap size={40} className='text-primary bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/30'/>},
            {title: "Architecture", description:"Designing systems that scale from MVP to enterprise-level", icon: <Database size={40} className='text-primary bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/30'/>},
        ]
    return (
        <div ref={aboutRef} className='w-full min-h-screen md:h-screen flex flex-col items-center py-7 md:bg-[#0f1012]'>
            <div className='md:container flex flex-col h-full'>
                <div>
                    <H1 className='text-center text-primary font-fira underline underline-offset-9 mb-4'>
                        About Me
                    </H1>
                </div>
                <div className='flex-1 w-full flex flex-col justify-center items-center md:m-0 sm:p-5 md:p-0'>
                    <div className='md:w-9/12 md:font-fira md:text-lg flex flex-col text-[#e4e4e7] bg-[#141517] border border-[#27292c] p-2 md:p-5 rounded-xl'>
                        Building scalable applications that address real-world issues is my passion as a full-stack developer. 
                        My main areas of expertise are creating clear, maintainable code and designing systems that can expand 
                        to meet changing business requirements.
                        With experience in cloud infrastructure, back-end services, and front-end frameworks, I approach every 
                        project holistically, from conception to production deployment.
                    </div>
                    <div className='md:w-9/12 flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-4 mt-6 md:mt-3 mx-1' >
                        {
                            skils.map((skil)=>(
                                <div className='w-full h-full group p-5 bg-[#141517] rounded-xl border border-[#27292c] hover:border-[#0a824b]'>
                                    <div>
                                        {skil.icon}
                                    </div>
                                    <P className='text-[#e4e4e7]'>
                                        {skil.title}
                                    </P>
                                    <P className='text-[#7f8489]'>
                                        {skil.description}
                                    </P>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
