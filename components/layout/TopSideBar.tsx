"use client";
import { navLinks } from "@/lib/constants"


import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react";


const TopSideBar = () => {
    const pathname = usePathname();
    const [dropdownMenu, setDropdownMenu] = useState(false);
    return (
        <div className="sticky top-0 z-30 w-full flex justify-between items-center px-4 py-2 shadow-xl bg-blue-2 lg:hidden">
            <Image src={'/logo.png'} alt='logo' width={150} height={70} priority />
            <div className='flex  gap-8 max-md:hidden'>
                {
                    navLinks.map((link) => (
                        <Link href={link.url} key={link.label} className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-blue-1" : "text-grey-1"}`}>
                            <p>{link.label}</p>
                        </Link>
                    ))
                }
            </div>

            <div className='relative flex gap-4 items-center '>
                <Menu className="cursor-pointer md:hidden" onClick={() => { setDropdownMenu(!dropdownMenu) }} />
                {dropdownMenu && (
                    <div className='absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg'>
                        {
                            navLinks.map((link) => (
                                <Link href={link.url} key={link.label} className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-blue-1" : "text-grey-1"}`}>
                                    <div className="flex items-center justify-between gap-4"> {link.icon} <p>{link.label}</p></div>
                                </Link>
                            ))
                        }
                    </div>
                )}
                <UserButton />
            </div>
        </div>
    )
}

export default TopSideBar