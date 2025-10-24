import { H1, H3, P } from "@/components/ui/typography";
import { ChevronDown } from "lucide-react";
import type React from "react";

type homeProps = {
    homeRef: React.RefObject<HTMLDivElement>
}

export default function HomeSection({homeRef}: homeProps) {
    
    return (
        <div ref={homeRef} className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative">
            {/* Top Fade Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `
                    linear-gradient(to right, #272a2c 1px, transparent 1px),
                    linear-gradient(to bottom, #272a2c 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
                WebkitMaskImage:
                    "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                maskImage:
                    "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
                }}
            />
            <div
                className="absolute inset-0 z-0"
                style={{
                backgroundImage: `
                    linear-gradient(to right, transparent 1px),
                    linear-gradient(to bottom, transparent 1px),
                    radial-gradient(circle at 50% 60%, rgba(0,255,136,0.11) 0%, rgba(0,255,136,0.05) 40%, transparent 70%)
                `,
                backgroundSize: "40px 40px, 40px 40px, 100% 100%",
                }}
            />
            <div className="min-h-full flex-1 container md:flex md:items-center md:justify-around px-5 md:px-0 flex flex-col md:flex-row gap-10 z-10 py-20 ">
                <div className="mt-10 md:mt-0 flex md:hidden items-center justify-center ">
                    <div className="relative flex items-center justify-center">
                        <img src="/public/images/profile.JPG" alt="" className="size-30 md:size-70 rounded-full object-cover ring-4 ring-[#7f8489]"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 flex-wrap items-center md:items-start max-w-full md:max-w-lg">
                    <H1 className="text-[#7f8489] font-fira z-10 text-center md:text-start lg:text-6xl">
                        <span className="text-[#e4e4e7]">Hi I'm </span>
                        Abdelhadi Nachit
                    </H1>
                    <H3 className="text-[#e4e4e7] font-fira z-10 lg:text-3xl">
                        Full Stack Developer 
                    </H3>
                    <P className="text-[#7f8489] font-fira z-10 text-center md:text-start lg:text-lg">
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
                <ChevronDown size={48} className="text-[#e4e4e7] animate-bounce"/>
                {/* <P className="text-lg text-[#7f8489] font-bold">Swipe up</P> */}
            </div>
        </div>
    )
}
