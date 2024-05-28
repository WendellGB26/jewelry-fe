import api from '../index';

export const getUser = async (email, password) => {
  try {
    const response = await api.post(`/users/getUser`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await api.post(`/users/createUser`, user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
