import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { QUERY_KEYS } from '../../../constants';
import { LoginDataParams } from '../../../services/login/types';
import { loginUser } from '../../../services';
import { useUserStore } from '../../../store';

import type { UseLoginHookType } from './types';

const useLogin = (): UseLoginHookType => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isErrorSnackbarVisible, setIsErrorSnackbarVisible] = useState<boolean>(false);

  const loginMutation = useMutation({
    mutationKey: [QUERY_KEYS.LOGIN],
    mutationFn: (loginData: LoginDataParams) => loginUser(loginData),
  });

  const setLoggedUser = useUserStore(state => state.setLoggedUser);

  const { data, isError } = loginMutation;

  useEffect(() => {
    loginMutation.reset();
  }, []);

  useEffect(() => {
    if (isError) {
      updateIsErrorSnackbarVisible(true);
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      setLoggedUser(data);
    }
  }, [data]);

  const updateEmail = (email: string) => {
    setEmail(email);
  };

  const updatePassword = (password: string) => {
    setPassword(password);
  };

  const updateIsErrorSnackbarVisible = (isVisible: boolean) => {
    setIsErrorSnackbarVisible(isVisible);
  };

  return {
    email,
    updateEmail,
    password,
    updatePassword,
    isErrorSnackbarVisible,
    updateIsErrorSnackbarVisible,
    loginMutation,
  };
};

export { useLogin };
