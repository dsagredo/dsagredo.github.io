import React from 'react';
import icons from './api/icons';

const Home = () => {
    return (
        <>
            <h1 className="mb-4">{'<ACERCA DE MÍ>'}</h1>
            <p className="mb-4">
                Mi objetivo como desarrollador es seguir mejorando mis habilidades tanto técnicas
                como blandas, y formar parte de un equipo laboral con las mismas expectativas o aún
                mejores. Estoy siempre dispuesto a aprender y capacitarme en nuevas tecnologías.
            </p>
            <p>
                Además, me encuentro actualmente en proceso de aprendizaje del inglés para poder
                crecer aún más como desarrollador. Si está buscando un desarrollador Full Stack con
                habilidades sólidas en diversas tecnologías, comprometido con el trabajo en equipo y
                la mejora continua, estoy seguro de que sería una excelente incorporación a su
                equipo.
            </p>
            <h1 className="my-4">{'<TECNOLOGÍAS>'}</h1>
            <ul className="flex gap-4 flex-wrap">
                <li className="p-2 rounded-3xl border border-white">{icons['reactjs']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['javascript']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['bootstrap']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['nextjs']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['typescript']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['mongodb']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['nodejs']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['tailwind']}</li>
            </ul>
            <h1 className="my-4">{'<HERRAMIENTAS>'}</h1>
            <ul className="flex gap-4 flex-wrap">
                <li className="p-2 rounded-3xl border border-white">{icons['vscode']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['git']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['gitlab']}</li>
                <li className="p-2 rounded-3xl border border-white">{icons['postman']}</li>
            </ul>
        </>
    );
};

export default Home;
