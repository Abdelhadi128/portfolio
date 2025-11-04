import { H1, H3, P } from "@/components/ui/typography";
import { ChevronDown } from "lucide-react";
import { SparkleParticles } from '@/components/ui/sparkle-particles';
import { useTheme } from "@/providers/theme-provider";

export default function HomeSection() {
    const {theme} = useTheme()
    return (
        <div id="home" className="min-h-screen w-full flex flex-col items-center justify-center relative ">
            {/* Top Fade Grid Background */}
            <SparkleParticles className="w-full h-full absolute top-0 left-0 z-0 " maxParticleSize={2} particleColor={theme == 'dark' ? "#00FF88" : "#000000"}/>
            <div className="min-h-full flex-1 container md:flex md:items-center md:justify-around px-5 md:px-0 flex flex-col md:flex-row gap-10 z-10 pb-20 pt-5 md:pb-0 md:pt-0 py-20">
                <div className="md:mt-0 flex md:hidden items-center justify-center ">
                    <div className="relative flex items-center justify-center">
                        <img src="/public/images/profile.JPG" alt="" className="size-30 md:size-70 rounded-full object-cover ring-4 ring-[#7f8489] z-50"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 flex-wrap items-center md:items-start max-w-full md:max-w-lg">
                    <H1 className="dark:text-[#7f8489] text-neutral-950 font-fira z-10 text-center md:text-start lg:text-6xl">
                        <span className="dark:text-[#e4e4e7]">Hi I'm </span>
                        Abdelhadi Nachit
                    </H1>
                    <H3 className="text-neutral-400 dark:text-[#e4e4e7] font-fira z-10 lg:text-3xl">
                        Full Stack Developer 
                    </H3>
                    <P className="text-neutral-950 dark:text-[#7f8489] font-fira text-justify lg:text-lg">
                        I create beautiful, functional, and user-centered digital experiences that combine thoughtful design with solid engineering.
                        Passionate about clean, maintainable code and innovative solutions, I strive to build interfaces that are not only visually engaging but also intuitive and efficient.
                    </P>
                </div>
                <div className="mt-10 md:mt-0 hidden md:flex items-center justify-center ">
                    <div className="relative flex items-center justify-center">
                        <img src="/public/images/profile.JPG" alt="" className="size-70 rounded-full object-cover ring-4 ring-[#7f8489]"/>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center absolute bottom-0 z-10">
                <ChevronDown size={48} className="dark:text-[#e4e4e7] text-neutral-950 animate-bounce"/>
                {/* <P className="text-lg text-[#7f8489] font-bold">Swipe up</P> */}
            </div>
        </div>
    )
}
