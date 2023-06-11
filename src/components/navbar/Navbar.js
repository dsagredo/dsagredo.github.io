import React from 'react';
import Link from 'next/link';
import { IoHome, IoCodeWorkingSharp } from 'react-icons/io5';

const Navbar = () => (
    <header className="lg:w-[526px] h-[144px] hidden lg:block mx-auto mb-10 box">
        <nav className="hidden lg:block p-[23px] bg-[#ffcb03] h-full border-2 border-black">
            <div className="flex">
                <Link
                    className="w-full h-20 mx-2.5 justify-center flex flex-col items-center text-xs bg-[#212425] hover:bg-gradient-to-r from-[#4243a0] to-[#2f2f6b]"
                    href="/"
                >
                    <span className="text-xl mb-1">
                        <IoHome className="stroke-1" strokeWidth="0" />
                    </span>
                    Inicio
                </Link>
                <Link
                    className="w-full h-20 mx-2.5 justify-center flex flex-col items-center text-xs bg-[#212425] hover:bg-gradient-to-r from-[#4243a0] to-[#2f2f6b]"
                    href="/projects"
                >
                    <span className="text-xl mb-1">
                        <IoCodeWorkingSharp className="stroke-1" strokeWidth="1" />
                    </span>
                    Proyectos
                </Link>
            </div>
        </nav>
    </header>
);

export default Navbar;
