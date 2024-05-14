 'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react';
import Image from "next/image";
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Separator } from './ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
    const { data: session } = useSession();
    const pathName=usePathname()
    
    return (
        <div className="flex justify-between items-center px-4 py-4 md:px-20 md:py-5 mb-[28px]">
            <div className="flex items-center space-x-1">
                <Image
                    src={'/NavLogo.svg'}
                    alt='Navbar logo'
                    width={22.31}
                    height={21.7}
                    className="inline"
                />
                <p className="font-bold text-2xl md:text-[24.94px] inline" style={{color:"#1C1C1C"}}>
                    <Link href={"/"}>GenAI</Link>
                </p>
            </div>
            {session&&
            <ul className="hidden md:flex md:flex-row md:space-x-5 md:text-[14.9]" style={{color:"#4B5563"}}>
                {!pathName.startsWith('/jokes')&&<li><Link href={'/jokes'}>Dashboard</Link></li>}
                {/* <li><Link href={'#'}>Product</Link></li>
                <li><Link href={'#'}>Testimonial</Link></li>
                <li><Link href={'#'}>FAQ</Link></li> */}
            </ul>}
            {session?<Button onClick={() => signOut()} variant="gradColor" className="hidden md:block" size={"sm"} >Sign out &rarr;</Button>:
            <Link href='/sign-up'>
                                <Button variant="gradColor" className="hidden md:block" size={"sm"} >Get started &rarr;</Button></Link>}

            {/* Mobile menu button */}
            <div className="md:hidden">

                {/* Mobile menu icon */}
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <Menu />
                        </MenubarTrigger>
                        <MenubarContent>
                            {/* <MenubarItem>
                                Features
                            </MenubarItem>
                            <MenubarItem>
                                Product
                            </MenubarItem>
                            <MenubarItem>
                                Testimonial
                            </MenubarItem>
                            <MenubarItem>
                                FAQ
                            </MenubarItem>
                            <Separator/> */}
                            <MenubarItem>
                            {session?<Button onClick={() => signOut()} variant="destructive" className="" size={"sm"} >Sign out &rarr;</Button>:
            <Link href='/sign-up'>
                                <Button variant="gradColor" className="" size={"sm"} >Get started &rarr;</Button></Link>}
                            
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                </Menubar>

            </div>
        </div>
    )
}