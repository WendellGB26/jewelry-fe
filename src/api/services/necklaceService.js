import api from '../index';

export const getNecklaces = async () => {
  try {
    const response = await api.get(`/necklaces`);
    return response.data;
  } catch (error) {
    console.error('Error fetching necklaces:', error);
    throw error;
  }
};