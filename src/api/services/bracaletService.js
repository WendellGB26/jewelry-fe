import api from '../index';

export const getBracelets = async (genero) => {
  try {
    const response = await api.get(`/bracelets/${genero}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bracelets:', error);
    throw error;
  }
};