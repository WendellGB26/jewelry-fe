import api from '../index';

export const getRings = async (genero) => {
  try {
    const response = await api.get(`/rings/${genero}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching rings:', error);
    throw error;
  }
};