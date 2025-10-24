import {Menu, Terminal, X } from "lucide-react";
import { H3 } from "../ui/typography";
import { useEffect, useState } from "react";

type navProps = {
    navElements: { path: string, element: string, ref:any}[],
    scrollToSection: (ref:any)=>void,
    homeRef: any,
}

export default function NavBar({navElements, scrollToSection, homeRef}:navProps) {

    const [openMenu, setOpenMenu] = useState(false)
    const [opned, setOpned] = useState('home')
    // const scroll = useRef(null)

    const navActions = (ref: any, element: string, mobileMenu: boolean = false)=> {
        if(mobileMenu){
            setOpenMenu(false)
            setOpned(String(element).toLowerCase())
            scrollToSection(ref)
        }else{
            setOpned(String(element).toLowerCase())
            scrollToSection(ref)
        }
    }
        const [scrolled, setScrolled] = useState(false)
        useEffect(()=>{
            const handleScroll = ()=>{
                if(window.scrollY > 50 ){
                    setScrolled(true)
                }else{
                    setScrolled(false)
                }
            }
            window.addEventListener("scroll", handleScroll);
            handleScroll(); // ✅ check once on mount
            return ()=>{
                window.removeEventListener("scroll", handleScroll);
            }
        }, [])
    return (
        <div className={`flex flex-col items-center top-0 w-full z-50 fixed ${scrolled ? 'bg-black border-b-2 border-[#272a2c]' : 'bg-transparent'}`}>
            <div className="flex px-5 md:container items-center justify-between py-4 md:px-0 w-full">
                <div className="flex items-center justify-center hover:text-primary ">
                    <Terminal size={30} className="text-primary"/>
                    <H3 onClick={() => scrollToSection(homeRef)} className="text-[#a1a1aa] ml-2 hover:text-primary cursor-pointer">Portfolio</H3>
                </div>
                <div className="md:flex flex-col justify-end hidden ">
                    <ul className="flex gap-7">
                        {navElements.map((navElement, index) => (
                            <li  key={index} onClick={() => navActions(navElement.ref, navElement.element) } className={`${"" === navElement.element.toLowerCase() ? 'bg-primary/20 text-green-500' : 'text-[#a1a1aa] hover:bg-primary/20 hover:text-primary' } px-4 py-2 rounded-lg cursor-pointer`}>
                                {navElement.element}
                            </li>
                        ))
                        }
                    </ul>
                </div>
                {/* mobile menu */}
                <div className="md:hidden">
                    {openMenu ? <X size={45} onClick={()=>setOpenMenu(!openMenu)} className="cursor-pointer text-white"/> : <Menu size={45} onClick={()=>setOpenMenu(!openMenu)} className="cursor-pointer text-white"/>}
                </div>
            </div>
            {openMenu && (
                <div className="md:hidden w-full bg-black/90 backdrop-blur-sm px-5 py-4">
                    <ul className="flex flex-col gap-4">
                        {navElements.map((navElement, index) => (
                            <li key={index} onClick={() => navActions(navElement.ref, navElement.element, true) } className={`${opned === navElement.element.toLowerCase() ? 'bg-primary/20 text-green-500' : 'text-[#a1a1aa] hover:bg-primary/20 hover:text-primary' } px-4 py-2 rounded-lg cursor-pointer`}>
                                {navElement.element}
                            </li>
                        ))
                        }
                    </ul>
                </div>
            )}
        </div>
    )
}
