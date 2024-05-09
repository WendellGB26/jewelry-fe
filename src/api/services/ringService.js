import api from '../index';

export const getRings = async () => {
  try {
    const response = await api.get(`/rings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching rings:', error);
    throw error;
  }
};