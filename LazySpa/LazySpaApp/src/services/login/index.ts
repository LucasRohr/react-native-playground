import { userInterfaceFactory } from '../../factories';
import { UserApiInterface, UserInterface } from '../../interfaces';
import { axiosInstance } from '../axios';
import type { LoginDataParams } from './types';

export const loginUser = async (loginData: LoginDataParams): Promise<UserInterface> => {
  try {
    const jsonData = JSON.stringify(loginData);

    const response = await axiosInstance.post<LoginDataParams, UserApiInterface>(
      '/signin',
      jsonData,
    );

    const parsedResponse = userInterfaceFactory(response);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
};
