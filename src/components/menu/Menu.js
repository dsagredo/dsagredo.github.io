import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoHome, IoCodeWorkingSharp } from 'react-icons/io5';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="w-full flex items-center justify-between px-4 py-2 lg:pt-[8px] bg-[#ffcb03] lg:bg-transparent">
                <Link href="/">
                    <h3 className="text-2xl font-bold">DSagredo.dev</h3>
                </Link>
                <div className="flex items-center">
                    <span
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:opacity-0 lg:invisible visible opacity-100 w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-black text-3xl"
                    >
                        {isOpen ? (
                            <AiOutlineClose strokeWidth="0" />
                        ) : (
                            <AiOutlineMenu strokeWidth="0" />
                        )}
                    </span>
                </div>
            </div>
            <nav className={isOpen ? 'block lg:hidden' : 'hidden'}>
                <ul
                    className={
                        isOpen
                            ? 'block shadow-md absolute z-[22222222222222] w-full bg-[#ffcb03]'
                            : 'flex my-12'
                    }
                >
                    <li className="mb-1 border-t-2 border-t-[#1D1D1D]">
                        <Link
                            className="cursor-pointer mx-2.5 flex py-2.5 px-2 md:px-4 xl:px-5 text-black"
                            href="/"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="text-xl mr-2">
                                <IoHome className="stroke-1" strokeWidth="0" />
                            </span>
                            Inicio
                        </Link>
                    </li>
                    <li className="mb-1 border-t-2 border-t-[#1D1D1D]">
                        <Link
                            className="cursor-pointer mx-2.5 flex py-2.5 px-2 md:px-4 xl:px-5 text-black"
                            href="/projects"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="text-xl mr-2">
                                <IoCodeWorkingSharp className="stroke-1" strokeWidth="1" />
                            </span>
                            Proyectos
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;
