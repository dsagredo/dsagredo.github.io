import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { IoLogoGithub } from 'react-icons/io5';
import { HiLink } from 'react-icons/hi';
import data from './api/data';
import icons from './api/icons';

const Works = () =>
    data.map(({ id, image, title, description, github, url, status, icon }) =>
        status ? (
            <div key={id}>
                <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-5">
                        <div className="border">
                            <div className="px-2">
                                <Icon
                                    className="inline-block mx-1"
                                    icon="emojione:red-circle"
                                    width="0.55em"
                                    height="0.55em"
                                />
                                <Icon
                                    className="inline-block mx-1"
                                    icon="twemoji:yellow-circle"
                                    width="0.55em"
                                    height="0.55em"
                                />
                                <Icon
                                    className="inline-block mx-1"
                                    icon="twemoji:green-circle"
                                    width="0.55em"
                                    height="0.55em"
                                />
                            </div>
                            <Image src={image} alt={title} width="1080" height="600" />
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <p className="text-base">{title}</p>
                        <div className="flex my-2">
                            {Object.values(
                                icon.map((value, index) => <div key={index}>{icons[value]}</div>)
                            )}
                        </div>
                        <p className="text-xs">{description}</p>
                        <div className="flex my-2">
                            <Link href={github} className="mr-2">
                                <IoLogoGithub className="inline-block text-xl" />
                                <span className="text-xs ml-1">Ver Código</span>
                            </Link>
                            <Link href={url}>
                                <HiLink className="inline-block text-xl" />
                                <span className="text-xs ml-1">Ver Demo</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className="my-8" />
            </div>
        ) : (
            <div key={id}>
                <div className="grid lg:grid-cols-12 gap-6" key={id}>
                    <div className="lg:col-span-7">
                        <p className="text-base">{title}</p>
                        <div className="flex my-2">
                            {Object.values(
                                icon.map((value, index) => <div key={index}>{icons[value]}</div>)
                            )}
                        </div>
                        <p className="text-xs">{description}</p>
                        <div className="flex my-2">
                            <Link href={github} className="mr-2">
                                <IoLogoGithub className="inline-block text-xl" />
                                <span className="text-xs ml-1">Ver Código</span>
                            </Link>
                            <Link href={url}>
                                <HiLink className="inline-block text-xl" />
                                <span className="text-sm/[17px] ml-1">Ver Demo</span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="border">
                            <div className="px-2">
                                <Icon
                                    className="inline-block mx-1"
                                    icon="emojione:red-circle"
                                    width="0.55em"
                                    height="0.55em"
                                />
                                <Icon
                                    className="inline-block mx-1"
                                    icon="twemoji:yellow-circle"
                                    width="0.55em"
                                    height="0.55em"
                                />
                                <Icon
                                    className="inline-block mx-1"
                                    icon="twemoji:green-circle"
                                    width="0.55em"
                                    height="0.55em"
                                />
                            </div>
                            <Image src={image} alt={title} width="1080" height="600" />
                        </div>
                    </div>
                </div>
                <hr className="my-8" />
            </div>
        )
    );

export default Works;
