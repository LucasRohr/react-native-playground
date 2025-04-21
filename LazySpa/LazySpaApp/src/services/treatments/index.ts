import { AxiosResponse } from 'axios';
import { axiosInstance } from '../axios';

import type { TreatmentsApiInterface, TreatmentsInterface } from '../../interfaces';
import { treatmentsInterfaceFactory } from '../../factories';

export const getTreatments = async (): Promise<TreatmentsInterface> => {
  try {
    const response = await axiosInstance.get<TreatmentsApiInterface>('/treatments');

    const parsedResponse = treatmentsInterfaceFactory(response.data);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
};
