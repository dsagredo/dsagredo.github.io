import React, { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-full flex items-center justify-between px-4 py-2 lg:pt-[8px] bg-[#ffcb03] lg:bg-transparent">
                <Link href="/">
                    <h3>Diego.dev</h3>
                </Link>
                <div className="flex items-center">
                    <span
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:opacity-0 lg:invisible visible opacity-100 w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white text-3xl"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                        </svg>
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
                            className="cursor-pointer font-poppins text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r text-white linked"
                            href="/"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="mr-2 text-xl">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                                </svg>
                            </span>
                            Home
                        </Link>
                    </li>
                    <li className="mb-1 border-t-2 border-t-[#1D1D1D]">
                        <Link
                            className="cursor-pointer font-poppins text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r text-white linked"
                            href="/works"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="mr-2 text-xl">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                                        fill="currentColor"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;
