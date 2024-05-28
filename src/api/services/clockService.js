import api from '../index';

export const getClocks = async (genero) => {
  try {
    const response = await api.get(`/clocks/${genero}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching clocks:', error);
    throw error;
  }
};