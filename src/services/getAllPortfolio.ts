import axios from 'axios';
import { ProjectT } from '../types/portfolioT';

const API_BASE_ALL_PORTFOLIO = import.meta.env.VITE_API_BASE_DS;

const getAllPortfolio = async (): Promise<ProjectT[]> => {
    try {
        const res = await axios.get(`${API_BASE_ALL_PORTFOLIO}/api/projects`);
        return res.data;
    } catch (error) {
        console.error('Error al obtener portafolios:', error);
        throw error;
    }
};

export default getAllPortfolio;
