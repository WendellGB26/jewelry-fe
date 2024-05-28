import api from '../index';

export const getEarringss = async (genero) => {
  try {
    const response = await api.get(`/earrings/${genero}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching earrings:', error);
    throw error;
  }
};