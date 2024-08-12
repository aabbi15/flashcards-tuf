"use client";

import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navbar() {

    const pathname = usePathname();
    console.log(pathname);

    return (



        <nav class=" border-gray-200 bg-gray-900">

            
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class=" space-x-3 ">
                    <Image src="/tuf.svg" alt="TUF" width={90} height={50} />
                    
                </a>
                
                <div class="hidden sm:flex self-center text-2xl font-semibold  text-white">TUF Flashcards</div>
                
                <div className="flex items-center text-white gap-5">
                    <a href="/" className={!(pathname=="/admin")?"text-blue-500":"text-white hover:text-blue-500"} >Home</a>
                    <a href="/admin"  className={(pathname=="/admin")?"text-blue-500":"text-white hover:text-blue-500"}>Admin</a>
            </div>
            </div>
        </nav>


    )
}