import React from 'react';
import info from './api/info';
import icons from './api/icons';

const Home = () => (
    <div data-aos="fade">
        <h1 className="mb-4">{info.about.title}</h1>
        <p className="mb-4">{info.about.paragraph1}</p>
        <p>{info.about.paragraph2}</p>
        <h1 className="my-4">{info.technology.title}</h1>
        <ul className="flex gap-4 flex-wrap">
            {info.technology.lang.map(({ id, name }) => (
                <li key={id} className="p-2 rounded-3xl border border-white">
                    {icons[name]}
                </li>
            ))}
        </ul>
        <h1 className="my-4">{info.tools.title}</h1>
        <ul className="flex gap-4 flex-wrap">
            {info.tools.lang.map(({ id, name }) => (
                <li key={id} className="p-2 rounded-3xl border border-white">
                    {icons[name]}
                </li>
            ))}
        </ul>
    </div>
);

export default Home;
