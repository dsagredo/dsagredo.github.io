import React from 'react';
import { IoLogoReact, IoLogoJavascript, IoLogoGitlab } from 'react-icons/io5';
import { FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiTypescript, SiTailwindcss, SiPostman } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { TbBrandVscode } from 'react-icons/tb';
import { SiPrisma } from 'react-icons/si';

const icons = {
    reactjs: <IoLogoReact className="text-3xl" fill="#60dbfb" />,
    javascript: <IoLogoJavascript className="text-3xl" fill="#ebd41b" />,
    bootstrap: <FaBootstrap className="text-3xl" fill="#7609f6" />,
    nextjs: <TbBrandNextjs className="text-3xl" fill="#000000" />,
    typescript: <SiTypescript className="text-3xl" fill="#3077c6" />,
    git: <BsGithub className="text-3xl" fill="#ffffff" />,
    mongodb: <SiMongodb className="text-3xl" fill="#4fa94a" />,
    nodejs: <FaNodeJs className="text-3xl" fill="#679f63" />,
    tailwind: <SiTailwindcss className="text-3xl" fill="#37bcf8" />,
    vscode: <TbBrandVscode className="text-3xl" fill="#3dabf2" />,
    gitlab: <IoLogoGitlab className="text-3xl" fill="#e24328" />,
    postman: <SiPostman className="text-3xl" fill="#fe6c37" />,
    prisma: <SiPrisma className="text-3xl" fill="#123A50" />,
};

export default icons;
