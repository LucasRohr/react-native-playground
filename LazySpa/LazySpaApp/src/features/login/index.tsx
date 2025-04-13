import { Image, Text, View } from 'react-native';
import { useLogin } from './hooks';
import { LOGO } from '../../assets';

import { styles } from './styles';
import { STRINGS } from './strings';
import { LSButton, LSInput, LSPasswordInput } from '../../components';
import { useCallback } from 'react';
import { Snackbar } from 'react-native-paper';

const LoginPage = () => {
  const {
    email,
    updateEmail,
    password,
    updatePassword,
    isErrorSnackbarVisible,
    updateIsErrorSnackbarVisible,
    loginMutation,
  } = useLogin();

  const { isPending, error } = loginMutation;

  const onPressLogin = useCallback(() => {
    loginMutation.mutate({
      email,
      password,
    });
  }, [loginMutation]);

  const renderErrorSnackbar = useCallback(() => {
    return (
      <Snackbar
        visible={isErrorSnackbarVisible}
        onDismiss={() => updateIsErrorSnackbarVisible(false)}
        action={{
          label: 'X',
          onPress: () => {
            updateIsErrorSnackbarVisible(false);
            loginMutation.reset();
          },
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
