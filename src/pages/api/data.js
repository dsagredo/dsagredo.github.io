import pokemonReact from '/images/album/pokemon-react.png';
import pokemonNext from '/images/album/pokemon-next.png';

const data = [
    {
        id: 1,
        image: pokemonReact,
        title: 'Pokedex con ReactJS',
        description:
            'Crear un pokedex usando la API de pokemon, tal que me listara todos los pokemon que se han creado hasta ahora, asi mismo si busco un pokemon en el formulario, me entregue informacion del pokemon buscado.',
        github: 'https://github.com/dsagredo/project-pokemon-reactjs',
        url: 'https://project-pokemon-api.netlify.app/',
        icon: ['javascript', 'reactjs', 'bootstrap'],
        status: true,
    },
    {
        id: 2,
        image: pokemonNext,
        title: 'Pokémon App con NextJS',
        description:
            'This was my final year software project and it is a system for monitoring progress of final year students. It has three levels of users i.e Students, Supervisors and the Project Coordinator. The output of the system is a list of students who have completed their projects.',
        github: 'https://github.com/dsagredo/project-pokemon-nextjs',
        url: 'https://project-pokemon-nextjs.vercel.app/',
        icon: ['nextjs', 'typescript'],
        status: false,
    },
];

export default data;
