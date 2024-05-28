import api from '../index';

export const getNecklaces = async (genero) => {
  try {
    const response = await api.get(`/necklaces/${genero}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching necklaces:', error);
    throw error;
  }
};