import pokemonReact from '../../../public/images/album/pokemon-react.png';
import pokemonNext from '../../../public/images/album/pokemon-next.png';
import tesloNext from '../../../public/images/album/teslo-next.png';

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
        description: 'Aplicación de la Pokedex simple creada utilizando NextJS y PokeAPI',
        github: 'https://github.com/dsagredo/project-pokemon-nextjs',
        url: 'https://project-pokemon-nextjs.vercel.app/',
        icon: ['nextjs', 'typescript'],
        status: false,
    },
    {
        id: 3,
        image: tesloNext,
        title: 'Teslo Shop App con NextJS',
        description:
            'TesloShop: Aplicación completa y bastante grande para el manejo y venta de productos utilizando NextJS y Prisma Client',
        github: 'https://github.com/dsagredo/project-teslo-shop-nextjs',
        url: 'https://teslo-mercado.vercel.app/',
        icon: ['nextjs', 'typescript', 'tailwind', 'prisma'],
        status: true,
    },
];

export default data;
