import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5';
import { FaDownload } from 'react-icons/fa';
import myperfile from '../../../public/images/perfile.png';

const Sidebar = () => {
    return (
        <div className="w-full mb-6 mx-auto relative lg:mb-0 text-center mt-[180px] md:mt-[220px] lg:mt-0 box relative">
            <Image
                src={myperfile}
                alt="Perfile"
                className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto border-2 border-black -mt-[140px]"
                width={240}
                height={240}
                priority={true}
            />
            <div className="pt-[100px] bg-[#ffcb03] px-6 pb-8 border-2 border-black">
                <span className="mt-6 text-sm lg:text-lg text-white">¡Hola!</span>
                <p className="mb-1 text-xs lg:text-lg text-white">Soy Diego Sagredo</p>
                <p className="mb-4 inline-block bg-[#1D1D1D] text-xs px-3 lg:px-2 py-1.5 text-[#A6A6A6]">
                    Front End Developer
                </p>
                <div className="flex justify-center space-x-3">
                    <a
                        href="https://www.linkedin.com/in/dsagredog/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="socialbtn text-[#0072b1]">
                            <FaLinkedinIn />
                        </span>
                    </a>
                </div>
                <div className="p-6 mt-7 bg-[#1D1D1D]">
                    <div className="flex py-2.5 border-b border-[#3D3A3A]">
                        <span className="flex-shrink-0 socialbtn bg-black text-[#1d9362] shadow-md">
                            <IoLogoWhatsapp />
                        </span>
                        <div className="text-left ml-2.5">
                            <p className="text-xs text-[#A6A6A6]">Whatsapp</p>
                            <p className="text-white break-all">
                                <a
                                    className="hover:text-[#FA5252] text-xs duration-300 transition"
                                    href="tel:+56930183607"
                                >
                                    +56930183607
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#3D3A3A]">
                        <span className="flex-shrink-0 socialbtn bg-black text-[#FD7590] shadow-md">
                            <IoMailOutline />
                        </span>
                        <div className="text-left ml-2.5">
                            <p className="text-xs text-[#A6A6A6]">Email</p>
                            <p className="text-white break-all">
                                <a
                                    className="hover:text-[#FA5252] duration-300 transition text-xs"
                                    href="mailto:dsagredog@gmail.com"
                                >
                                    dsagredog@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <a
                    href="/files/CVDiegoSagredo.pdf"
                    download
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] px-8 py-3 text-xs text-white rounded-[35px] mt-6"
                >
                    <div className="mr-2">
                        <FaDownload className="text-base" />
                    </div>
                    Descargar CV
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
