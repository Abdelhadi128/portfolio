import {Menu, Terminal, X } from "lucide-react";
import { H3 } from "../ui/typography";
import { useState } from "react";
import ScrollIntoView  from "react-scroll-into-view";
import { ModeToggle } from "../ui/mode-toggle";
import TopStickyBar from "@/components/ui/top-sticky-bar"
type navProps = {
    navElements: { path: string, element: string, ref:any}[],
}

export default function NavBar({navElements}:navProps) {

    const [openMenu, setOpenMenu] = useState(false)
    return (
        <TopStickyBar showOnScroll={true} scrollThreshold={60} className="dark:bg-black bg-white/95 text-green-500 dark:text-green-500 m-0 p-0">
            <div className={`flex flex-col items-center top-0 w-full border-b-2 border-[#272a2c]`}>
                <div className="flex px-5 md:container items-center justify-between py-4 md:px-0 w-full">
                    <div className="flex items-center justify-center hover:text-primary ">
                        <Terminal size={30} className="text-neutral-950 dark:text-primary"/>
                        <ScrollIntoView selector="#home">
                            <H3 className="dark:text-[#a1a1aa] ml-2 text-neutral-950 hover:dark:text-primary cursor-pointer">Portfolio</H3>
                        </ScrollIntoView>
                    </div>
                    <div className="md:flex flex-col justify-end hidden">
                        <ul className="flex gap-7">
                            {navElements.map((navElement, index) => (
                                <ScrollIntoView selector={`#${navElement.element.toLowerCase()}`}>
                                    <li  key={index}  className={`${"" === navElement.element.toLowerCase() ? 'bg-primary/20 text-green-500' : 'dark:text-[#a1a1aa] text-neutral-950 hover:bg-primary/20 hover:text-primary ' } px-4 py-2 rounded-lg cursor-pointer`}>
                                        {navElement.element}
                                    </li>
                                </ScrollIntoView>
                            ))  
                            }
                                <ModeToggle/>
                        </ul>
                    </div>
                    {/* mobile menu */}
                    <div className="md:hidden">
                        {openMenu ? <X size={45} onClick={()=>setOpenMenu(!openMenu)} className="cursor-pointer "/> : <Menu size={45} onClick={()=>setOpenMenu(!openMenu)} className="cursor-pointer"/>}
                    </div>
                </div>
                {openMenu && (
                    <div className="md:hidden w-full backdrop-blur-sm px-5 py-4">
                        <ul className="flex flex-col gap-4">
                            {navElements.map((navElement, index) => (
                                <ScrollIntoView selector={`#${navElement.element.toLowerCase()}`}>
                                    <li key={index} onClick={() => setOpenMenu(false) } className={`${"" === navElement.element.toLowerCase() ? 'bg-primary/20 text-green-500' : 'text-[#a1a1aa] hover:bg-primary/20 hover:text-primary' } px-4 py-2 rounded-lg cursor-pointer`}>
                                        {navElement.element}
                                    </li>
                                </ScrollIntoView>
                            ))
                            }
                            <li className=" px-4 py-2 rounded-lg cursor-pointer">
                                <ModeToggle/>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </TopStickyBar>
    )
}
