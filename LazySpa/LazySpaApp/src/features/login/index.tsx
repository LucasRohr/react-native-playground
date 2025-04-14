import { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { useLogin } from './hooks';
import { LOGO } from '../../assets';
import { LSButton, LSInput, LSPasswordInput } from '../../components';

import type { RootStackParamList } from '../../routes/types';

import { styles } from './styles';
import { STRINGS } from './strings';

const LoginPage = (navigation: DrawerScreenProps<RootStackParamList, 'Login'>) => {
  const {
    email,
    updateEmail,
    password,
    updatePassword,
    isErrorSnackbarVisible,
    updateIsErrorSnackbarVisible,
    loginMutation,
  } = useLogin(navigation);

  const { isPending, error } = loginMutation;

  const onPressLogin = useCallback(() => {
    loginMutation.mutate({
      email,
      password,
    });
  }, [loginMutation]);

  const renderErrorSnackbar = useCallback(() => {
    const onDismiss = () => {
      updateIsErrorSnackbarVisible(false);
      loginMutation.reset();
    };

    return (
      <Snackbar
        visible={isErrorSnackbarVisible}
        onDismiss={onDismiss}
        action={{
          label: 'X',
          onPress: onDismiss,
        }}>
        {error?.message}
      </Snackbar>
    );
  }, [error, isErrorSnackbarVisible]);

  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo} />
      <Text style={[styles.description, styles.paddingDescription]}>{STRINGS.DESCRIPTION}</Text>
      <View style={styles.inputsWrapper}>
        <LSInput
          value={email}
          onChange={text => updateEmail(text)}
          label={STRINGS.EMAIL_INPUT_LABEL}
          placeholder={STRINGS.EMAIL_INPUT_PLACEHOLDER}
        />
        <LSPasswordInput
          value={password}
          onChange={text => updatePassword(text)}
          label={STRINGS.PASSWORD_INPUT_LABEL}
          placeholder={STRINGS.PASSWORD_INPUT_PLACEHOLDER}
        />
      </View>
      <LSButton title={STRINGS.LOGIN_BUTTON_TITLE} isLoading={isPending} onPress={onPressLogin} />
      {renderErrorSnackbar()}
    </View>
  );
};

export { LoginPage };
