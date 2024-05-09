import api from '../index';

export const getBracelets = async () => {
  try {
    const response = await api.get(`/bracelets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bracelets:', error);
    throw error;
  }
};