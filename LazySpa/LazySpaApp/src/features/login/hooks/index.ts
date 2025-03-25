import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { QUERY_KEYS } from '../../../constants';
import { LoginDataParams } from '../../../services/login/types';
import { loginUser } from '../../../services';

import type { UseLoginHookType } from './types';

const useLogin = (): UseLoginHookType => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginMutation = useMutation({
    mutationKey: [QUERY_KEYS.LOGIN],
    mutationFn: (loginData: LoginDataParams) => loginUser(loginData),
  });

  const updateEmail = (email: string) => {
    setEmail(email);
  };

  const updatePassword = (password: string) => {
    setPassword(password);
  };

  return { email, updateEmail, password, updatePassword, loginMutation };
};

export { useLogin };
