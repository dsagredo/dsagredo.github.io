import React from 'react';
import { IoLogoReact, IoLogoJavascript } from 'react-icons/io5';
import { FaBootstrap } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';

const icons = {
    reactjs: <IoLogoReact className="text-3xl mr-1" fill="#60dbfb" />,
    javascript: <IoLogoJavascript className="text-3xl mr-1" fill="#ebd41b" />,
    bootstrap: <FaBootstrap className="text-3xl mr-1" fill="#7609f6" />,
    nextjs: <TbBrandNextjs className="text-3xl mr-1" fill="#000000" />,
    typescript: <SiTypescript className="text-3xl mr-1" fill="#3077c6" />,
};

export default icons;
