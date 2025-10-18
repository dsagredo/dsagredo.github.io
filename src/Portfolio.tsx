import { JSX, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import getAllPortfolio from './services/getAllPortfolio';
import { ProjectT, TagT } from './types/portfolioT';
import Spinner from './component/Spinner';

const Portfolio = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const [projects, setProjects] = useState<ProjectT[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect((): void => {
        getAllPortfolio()
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((): void => {
                setError('Error al cargar los proyectos');
                setLoading(false);
            });
    }, []);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const nextPage = (): void =>
        setCurrentPage((prev: number): number =>
            Math.min(prev + 1, totalPages)
        );

    const prevPage = (): void =>
        setCurrentPage((prev: number): number => Math.max(prev - 1, 1));

    if (error) {
        return (
            <div className="bg-red-100 text-red-800 p-4 rounded-lg m-4">
                {error}
            </div>
        );
    }

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="bg-[#1e1e1e] text-white p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-400">
                        &lt; Portafolio /&gt;
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProjects.map(
                        (project: ProjectT, index: number): JSX.Element => (
                            <div
                                key={index}
                                className="bg-[#2d2d2d] rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl"
                            >
                                <div className="relative h-48 overflow-hidden group">
                                    <img
                                        src={project.imagen}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2d] to-transparent opacity-60"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 text-sm">
                                        {project.description}
                                    </p>

                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(
                                                (
                                                    item: TagT,
                                                    index: number
                                                ): JSX.Element => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 text-xs bg-[#404040] rounded-full text-blue-300 hover:bg-[#4a4a4a] transition-colors"
                                                    >
                                                        {item.name}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="flex items-center text-gray-300 hover:text-white transition-all hover:scale-105 transform cursor-pointer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-github-icon lucide-github w-5 h-5 mr-1"
                                            >
                                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                                <path d="M9 18c-4.51 2-5-2-7-2" />
                                            </svg>
                                            <span className="text-sm">
                                                Código
                                            </span>
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            className="flex items-center text-gray-300 hover:text-white transition-all hover:scale-105 transform cursor-pointer"
                                        >
                                            <ExternalLink className="w-5 h-5 mr-1" />
                                            <span className="text-sm">
                                                Demo
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div className="mt-8 flex justify-center items-center gap-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                            currentPage === 1
                                ? 'text-gray-500 cursor-not-allowed'
                                : 'text-white'
                        }`}
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                    </button>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                            currentPage === totalPages
                                ? 'text-gray-500 cursor-not-allowed'
                                : 'text-white'
                        }`}
                    >
                        <ChevronRight className="w-5 h-5 ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
