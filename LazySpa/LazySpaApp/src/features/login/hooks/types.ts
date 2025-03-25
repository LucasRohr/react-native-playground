import { UseMutationResult } from '@tanstack/react-query';

import type { UserApiInterface } from '../../../interfaces';
import type { LoginDataParams } from '../../../services/login/types';

export type UseLoginHookType = {
  email: string;
  updateEmail: (email: string) => void;
  password: string;
  updatePassword: (password: string) => void;
  loginMutation: UseMutationResult<UserApiInterface, Error, LoginDataParams, unknown>;
};
