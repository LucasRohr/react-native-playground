import { UserApiInterface } from '../../interfaces';
import { axiosInstance } from '../axios';
import type { LoginDataParams } from './types';

export const loginUser = async (loginData: LoginDataParams): Promise<UserApiInterface> => {
  try {
    const jsonData = JSON.stringify(loginData);

    const response = await axiosInstance.post<LoginDataParams, UserApiInterface>(
      '/signin',
      jsonData,
    );

    return response;
  } catch (error) {
    throw error;
  }
};
