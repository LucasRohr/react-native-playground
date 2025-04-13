import { UserInterface } from '../../interfaces';

export const buildEmptyObject = (): UserInterface => {
  return {
    id: '',
    email: '',
    name: '',
    phone: '',
    address: '',
    token: '',
  };
};
