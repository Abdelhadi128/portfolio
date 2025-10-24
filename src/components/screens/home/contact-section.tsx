import { H1, P } from '@/components/ui/typography'
import { Github, Linkedin, Mail } from 'lucide-react'
import type React from 'react'

type contactProps = {
    contactRef: React.RefObject<HTMLDivElement>
}

export default function ContactSection({contactRef}: contactProps) {
  const contacts = [
          {name: "GitHub", useName:"Abdelhadi128", link: "https://github.com/Abdelhadi128", icon:<Github size={40} className='text-primary bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/30'/>},
          {name: "LinkedIn", useName:"Abdelhadi128", link: "https://www.linkedin.com/in/abdelhadi-nachit", icon: <Linkedin size={40} className='text-primary bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/30'/>},
          {name: "Email", useName:"abdelhadi.nachit.dev@gmail.com", link: "abdelhadi.nachit.dev@gmail.com", icon: <Mail size={40} className='text-primary bg-primary/10 p-2 rounded-lg border border-primary/20 group-hover:bg-primary/30'/>}
        ]
  return (
    <div ref={contactRef} className='w-full min-h-screen md:h-screen flex flex-col items-center bbg-black'>
      <div className='md:container h-full py-6 flex flex-col items-center'>
        <div className='w-full h-full md:w-9/12 flex flex-col'>
          <H1 className='text-primary font-fira text-center my-10 underline underline-offset-9'>
            Let's Work Together
          </H1>
          <span className='text-[#7f8489] text-center text-lg md:text-2xl'>
            I'm always open to discussing new projects, opportunities, and collaborations.
          </span>
          <div className='w-full flex-1 flex flex-col justify-center mt-6 md:m-0'>
            <div className='w-full flex flex-col sm:grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-9 p-1 sm:p-0'>
              {contacts.map((contact)=>(  
                <a href={contact.link} className='w-full group flex flex-col items-center sm:min-h-full bg-[#141517] p-5 border border-[#0a824b] md:border-[#27292c] hover:border-[#0a824b] rounded-xl overflow-hidden'>
                    {contact.icon}
                    <P className='mt-0 text-[#e4e4e7]'>{contact.name}</P>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}