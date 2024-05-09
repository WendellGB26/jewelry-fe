import api from '../index';

export const getClocks = async () => {
  try {
    const response = await api.get(`/clocks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching clocks:', error);
    throw error;
  }
};