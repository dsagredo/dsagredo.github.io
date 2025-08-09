import { useEffect, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import getAllPortfolio from './services/getAllPortfolio';

const Portfolio = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect((): void => {
        getAllPortfolio()
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Error al cargar los proyectos');
                setLoading(false);
            });
    }, []);

    /*const projects = [
        {
            title: 'E-commerce Platform',
            description:
                'Una plataforma de comercio electrónico completa construida con React y Node.js. Incluye autenticación de usuarios, carrito de compras, pasarela de pagos y panel de administración.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Tailwind CSS'],
            githubLink: 'https://github.com/diegosagredo/ecommerce-platform',
            liveLink: 'https://ecommerce-platform-demo.netlify.app',
        },
        {
            title: 'AI Image Generator',
            description:
                'Aplicación que utiliza inteligencia artificial para generar imágenes a partir de descripciones textuales. Integra OpenAI API y permite compartir creaciones.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'OpenAI API', 'Node.js', 'Express', 'MongoDB'],
            githubLink: 'https://github.com/diegosagredo/ai-image-generator',
            liveLink: 'https://ai-image-gen-demo.netlify.app',
        },
        {
            title: 'Real-time Chat Application',
            description:
                'Chat en tiempo real con salas temáticas, mensajes directos y compartición de archivos. Implementa WebSocket para comunicación instantánea.',
            image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
            githubLink: 'https://github.com/diegosagredo/realtime-chat',
            liveLink: 'https://realtime-chat-demo.netlify.app',
        },
        {
            title: 'Fitness Tracking Platform',
            description:
                'Plataforma para seguimiento de rutinas de ejercicio, nutrición y progreso físico. Incluye gráficos interactivos y planes personalizados.',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Chart.js', 'Node.js', 'PostgreSQL', 'Redux'],
            githubLink: 'https://github.com/diegosagredo/fitness-tracker',
            liveLink: 'https://fitness-tracker-demo.netlify.app',
        },
        {
            title: 'Smart Home Dashboard',
            description:
                'Dashboard para control de dispositivos IoT en el hogar. Permite automatización, monitoreo en tiempo real y análisis de consumo energético.',
            image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'MQTT', 'Node.js', 'InfluxDB', 'Typescript'],
            githubLink: 'https://github.com/diegosagredo/smart-home',
            liveLink: 'https://smart-home-demo.netlify.app',
        },
        {
            title: 'Recipe Sharing Platform',
            description:
                'Plataforma social para compartir y descubrir recetas. Incluye búsqueda avanzada, categorización y sistema de valoraciones.',
            image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Firebase', 'Algolia', 'Redux', 'Tailwind'],
            githubLink: 'https://github.com/diegosagredo/recipe-sharing',
            liveLink: 'https://recipe-sharing-demo.netlify.app',
        },
        {
            title: 'Project Management Tool',
            description:
                'Herramienta tipo Kanban para gestión de proyectos con características avanzadas de colaboración y seguimiento de tiempo.',
            image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Redux'],
            githubLink: 'https://github.com/diegosagredo/project-management',
            liveLink: 'https://project-management-demo.netlify.app',
        },
        {
            title: 'Language Learning Platform',
            description:
                'Plataforma interactiva para aprendizaje de idiomas con ejercicios, juegos y sistema de progreso gamificado.',
            image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Redux'],
            githubLink: 'https://github.com/diegosagredo/language-learning',
            liveLink: 'https://language-learning-demo.netlify.app',
        },
        {
            title: 'Music Streaming Service',
            description:
                'Servicio de streaming de música con reproductor personalizado, playlists y recomendaciones basadas en IA.',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'WebRTC'],
            githubLink: 'https://github.com/diegosagredo/music-streaming',
            liveLink: 'https://music-streaming-demo.netlify.app',
        },
        {
            title: 'Virtual Event Platform',
            description:
                'Plataforma para eventos virtuales con streaming en vivo, networking y espacios de exhibición interactivos.',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'WebRTC', 'Node.js', 'Socket.io', 'Redis'],
            githubLink: 'https://github.com/diegosagredo/virtual-events',
            liveLink: 'https://virtual-events-demo.netlify.app',
        },
        {
            title: 'Personal Finance Manager',
            description:
                'Aplicación para gestión de finanzas personales con presupuestos, seguimiento de gastos y visualizaciones analíticas.',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Redux'],
            githubLink: 'https://github.com/diegosagredo/finance-manager',
            liveLink: 'https://finance-manager-demo.netlify.app',
        },
        {
            title: 'Job Board Platform',
            description:
                'Plataforma de búsqueda de empleo con matching inteligente, seguimiento de aplicaciones y análisis de mercado laboral.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Node.js', 'Elasticsearch', 'Redis', 'TypeScript'],
            githubLink: 'https://github.com/diegosagredo/job-board',
            liveLink: 'https://job-board-demo.netlify.app',
        },
        {
            title: 'Social Media Analytics',
            description:
                'Dashboard para análisis de redes sociales con métricas avanzadas, generación de reportes y seguimiento de tendencias.',
            image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f1c28b?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'D3.js'],
            githubLink: 'https://github.com/diegosagredo/social-analytics',
            liveLink: 'https://social-analytics-demo.netlify.app',
        },
        {
            title: 'Online Learning Management',
            description:
                'Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones automatizadas y seguimiento de progreso.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
            githubLink: 'https://github.com/diegosagredo/learning-management',
            liveLink: 'https://learning-management-demo.netlify.app',
        },
        {
            title: 'Telemedicine Platform',
            description:
                'Plataforma para consultas médicas virtuales con agendamiento, videollamadas seguras y gestión de historias clínicas.',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Redux'],
            githubLink: 'https://github.com/diegosagredo/telemedicine',
            liveLink: 'https://telemedicine-demo.netlify.app',
        },
    ];*/
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const nextPage = (): void =>
        setCurrentPage((prev: number): number => Math.min(prev + 1, totalPages));

    const prevPage = (): void => setCurrentPage((prev: number): number => Math.max(prev - 1, 1));

    return (
        <div className="bg-[#1e1e1e] text-white p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-400">&lt; Portafolio /&gt;</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentProjects.map(
                        (project, index) =>
                            console.log('project ', project) || (
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

                                    {/*<div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4 text-sm">
                                            {project.description}
                                        </p>

                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map(
                                                    (
                                                        tech: string,
                                                        techIndex: number
                                                    ): JSX.Element => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-2 py-1 text-xs bg-[#404040] rounded-full text-blue-300 hover:bg-[#4a4a4a] transition-colors"
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-300 hover:text-white transition-all hover:scale-105 transform"
                                            >
                                                <Github className="w-5 h-5 mr-1" />
                                                <span className="text-sm">Código</span>
                                            </a>
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-300 hover:text-white transition-all hover:scale-105 transform"
                                            >
                                                <ExternalLink className="w-5 h-5 mr-1" />
                                                <span className="text-sm">Demo</span>
                                            </a>
                                        </div>
                                    </div>*/}
                                </div>
                            )
                    )}
                </div>

                <div className="mt-8 flex justify-center items-center gap-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                            currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-white'
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
