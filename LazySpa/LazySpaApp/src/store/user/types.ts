import { UserInterface } from '../../interfaces';

export type UserStore = {
  user?: UserInterface;
  setLoggedUser: (user: UserInterface) => void;
  removeLoggedUSer: () => void;
};
