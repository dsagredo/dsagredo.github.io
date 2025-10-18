import { JSX } from 'react';

const Spinner = (): JSX.Element => {
    return (
        <div className="bg-[#1e1e1e] flex justify-center items-center w-screen h-screen p-5">
            <div className="text-center p-6">
                <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-[#ffffff] mx-auto"></div>
                <h2 className="text-white mt-4">Cargando...</h2>
            </div>
        </div>
    );
};

export default Spinner;
