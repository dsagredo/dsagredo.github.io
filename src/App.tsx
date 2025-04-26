import { useState } from 'react';
import { Files, Circle, X, Menu, Download } from 'lucide-react';
import Portfolio from './Portfolio';
import { Icon } from '@iconify/react';

const App = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState('about');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const frontendSkills = [
        {
            name: 'React',
            logo: 'devicon:react',
        },
        {
            name: 'Next.js',
            logo: 'devicon:nextjs',
        },
        {
            name: 'TypeScript',
            logo: 'devicon:typescript',
        },
        {
            name: 'JavaScript',
            logo: 'devicon:javascript',
        },
        {
            name: 'HTML5',
            logo: 'devicon:html5',
        },
        {
            name: 'CSS3',
            logo: 'devicon:css3',
        },
        {
            name: 'Tailwind CSS',
            logo: 'devicon:tailwindcss',
        },
        {
            name: 'Redux',
            logo: 'devicon:redux',
        },
    ];

    const backendSkills = [
        {
            name: 'Node.js',
            logo: 'devicon:nodejs',
        },
    ];

    const databaseSkills = [
        {
            name: 'MongoDB',
            logo: 'devicon:mongodb',
        },
    ];

    const tools = [
        {
            name: 'VScode',
            logo: 'devicon:vscode',
        },
        {
            name: 'GitHub',
            logo: 'devicon:github',
        },
        {
            name: 'GitLab',
            logo: 'devicon:gitlab',
        },
        {
            name: 'Postman',
            logo: 'devicon:postman',
        },
    ];

    const toggleMobileMenu = (): void => setIsMobileMenuOpen(!isMobileMenuOpen);

    const renderContent = (): JSX.Element => {
        if (activeTab === 'projects') {
            return <Portfolio />;
        }

        return (
            <div className="flex-1 p-4 md:p-6 overflow-auto">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
                                ¡Hola! 👋
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
                                Soy Diego Sagredo
                            </h2>
                        </div>
                        <a
                            href="#"
                            className="inline-flex items-cente hover:text-blue-500 text-white rounded-lg transition-colors duration-200 mt-4 md:mt-0"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Descargar CV
                        </a>
                    </div>

                    <div className="mb-8">
                        <div className="flex mb-4 gap-2">
                            <Icon
                                icon="mdi:about-circle-outline"
                                className="text-yellow-400 w-7 h-7 md:w-8 md:h-8"
                            />
                            <h2 className="text-xl md:text-2xl font-semibold text-yellow-400">
                                Sobre Mí
                            </h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Mi objetivo como desarrollador es seguir mejorando
                            mis habilidades tanto técnicas como blandas, y
                            formar parte de un equipo laboral con las mismas
                            expectativas o aún mejores. Estoy siempre dispuesto
                            a aprender y capacitarme en nuevas tecnologías.
                            Además, me encuentro actualmente en proceso de
                            aprendizaje para poder crecer aún más como
                            desarrollador. Si está buscando un desarrollador
                            Full Stack con habilidades sólidas en diversas
                            tecnologías, comprometido con el trabajo en equipo y
                            la mejora continua, estoy seguro de que sería una
                            excelente incorporación a su equipo.
                        </p>
                    </div>

                    <div className="mb-8">
                        <div className="flex mb-4 gap-2">
                            <Icon
                                icon="mdi:laptop"
                                className="text-yellow-400 w-7 h-7 md:w-8 md:h-8"
                            />
                            <h2 className="text-xl md:text-2xl font-semibold text-yellow-400">
                                Habilidades Técnicas
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-blue-400 underline underline-offset-4">
                                    Frontend
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {frontendSkills.map(
                                        (skill): JSX.Element => (
                                            <div
                                                key={skill.name}
                                                className="bg-[#2d2d2d] p-4 rounded-lg flex flex-col items-center justify-center gap-3 hover:bg-[#3d3d3d] transition-colors duration-200"
                                            >
                                                <Icon
                                                    icon={`${skill.logo}`}
                                                    height={48}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-blue-400 underline underline-offset-4">
                                    Backend
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {backendSkills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="bg-[#2d2d2d] p-4 rounded-lg flex flex-col items-center justify-center gap-3 hover:bg-[#3d3d3d] transition-colors duration-200"
                                        >
                                            <Icon
                                                icon={`${skill.logo}`}
                                                height={48}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-blue-400 underline underline-offset-4">
                                    Base de Datos
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {databaseSkills.map(
                                        (skill): JSX.Element => (
                                            <div
                                                key={skill.name}
                                                className="bg-[#2d2d2d] p-4 rounded-lg flex flex-col items-center justify-center gap-3 hover:bg-[#3d3d3d] transition-colors duration-200"
                                            >
                                                <Icon
                                                    icon={`${skill.logo}`}
                                                    height={48}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex mb-4 gap-2">
                            <Icon
                                icon="mdi:tools"
                                className="text-yellow-400 w-7 h-7 md:w-8 md:h-8"
                            />
                            <h2 className="text-xl md:text-2xl font-semibold text-yellow-400">
                                Herramientas
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {tools.map(
                                (tool): JSX.Element => (
                                    <div
                                        key={tool.name}
                                        className="bg-[#2d2d2d] p-4 rounded-lg flex flex-col items-center justify-center gap-3 hover:bg-[#3d3d3d] transition-colors duration-200"
                                    >
                                        <Icon
                                            icon={`${tool.logo}`}
                                            height={48}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex mb-4 gap-2">
                            <Icon
                                icon="mdi:contact-outline"
                                className="text-yellow-400 w-7 h-7 md:w-8 md:h-8"
                            />
                            <h2 className="text-xl md:text-2xl font-semibold text-yellow-400">
                                Contacto
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="#"
                                className="flex text-gray-300 hover:text-white gap-2"
                            >
                                <Icon icon="lucide:mail" height={24} />
                                Email
                            </a>
                            <a
                                href="#"
                                className="flex text-gray-300 hover:text-white gap-2"
                            >
                                <Icon icon="lucide:github" height={24} />
                                GitHub
                            </a>
                            <a
                                href="#"
                                className="flex items-center text-gray-300 hover:text-white gap-2"
                            >
                                <Icon icon="lucide:linkedin" height={24} />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex bg-[#1e1e1e] text-white relative">
            {/* Mobile Menu Button */}
            <button
                className="md:hidden fixed top-4 right-4 z-50 p-2 bg-[#333333] rounded-md border-white border-2"
                onClick={toggleMobileMenu}
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Sidebar */}
            <div
                className={`${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 fixed md:relative z-40 w-12 min-h-screen md:min-h-0 bg-[#333333] flex flex-col items-center py-4 transition-transform duration-300 ease-in-out`}
            >
                <button className="p-2 bg-[#404040] rounded mb-2">
                    <Files className="w-5 h-5" />
                </button>
            </div>

            {/* Explorer */}
            <div
                className={`${
                    isMobileMenuOpen ? 'translate-x-12' : '-translate-x-full'
                } md:translate-x-0 fixed md:relative z-30 w-60 min-h-screen md:min-h-0 bg-[#252526] border-r border-[#404040] transition-transform duration-300 ease-in-out`}
            >
                <div className="text-sm text-gray-400 font-medium">
                    <div className="flex items-center bg-[#2d2d2d] py-2 px-5">
                        <span>EXPLORADOR</span>
                    </div>
                    <div
                        className={`flex items-center py-2 px-6 cursor-pointer ${
                            activeTab === 'about'
                                ? 'bg-[#37373d]'
                                : 'hover:bg-[#2d2d2d]'
                        }`}
                        onClick={(): void => {
                            setActiveTab('about');
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        <Circle className="w-4 h-4 mr-1 text-blue-400" />
                        <span>app.jsx</span>
                    </div>
                    <div
                        className={`flex items-center py-2 px-6 cursor-pointer ${
                            activeTab === 'projects'
                                ? 'bg-[#37373d]'
                                : 'hover:bg-[#2d2d2d]'
                        }`}
                        onClick={(): void => {
                            setActiveTab('projects');
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        <Circle className="w-4 h-4 mr-1 text-yellow-400" />
                        <span>portfolio.jsx</span>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={(): void => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Tabs */}
                <div className="bg-[#2d2d2d] flex">
                    <div
                        className={`px-4 py-2 flex items-center cursor-pointer ${
                            activeTab === 'about'
                                ? 'bg-[#1e1e1e]'
                                : 'bg-[#2d2d2d]'
                        }`}
                        onClick={(): void => setActiveTab('about')}
                    >
                        <Circle className="w-4 h-4 mr-2 text-blue-400" />
                        <span>app.jsx</span>
                        <X
                            className="w-4 h-4 ml-2 hover:bg-[#404040] rounded"
                            onClick={(
                                e: React.MouseEvent<SVGSVGElement>
                            ): void => {
                                e.stopPropagation();
                                setActiveTab('about');
                            }}
                        />
                    </div>
                    {activeTab === 'projects' && (
                        <div
                            className={`px-4 py-2 flex items-center cursor-pointer ${
                                activeTab === 'projects'
                                    ? 'bg-[#1e1e1e]'
                                    : 'bg-[#2d2d2d]'
                            }`}
                            onClick={(): void => setActiveTab('projects')}
                        >
                            <Circle className="w-4 h-4 mr-2 text-yellow-400" />
                            <span>portfolio.jsx</span>
                            <X
                                className="w-4 h-4 ml-2 hover:bg-[#404040] rounded"
                                onClick={(
                                    e: React.MouseEvent<SVGSVGElement>
                                ): void => {
                                    e.stopPropagation();
                                    setActiveTab('about');
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Content */}
                {renderContent()}
            </div>
        </div>
    );
};

export default App;
