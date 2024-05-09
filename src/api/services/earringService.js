import api from '../index';

export const getEarringss = async () => {
  try {
    const response = await api.get(`/earrings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching earrings:', error);
    throw error;
  }
};