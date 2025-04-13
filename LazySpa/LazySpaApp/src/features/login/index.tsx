import { Image, Text, View } from 'react-native';
import { useLogin } from './hooks';
import { LOGO } from '../../assets';

import { styles } from './styles';
import { STRINGS } from './strings';
import { LSInput, LSPasswordInput } from '../../components';

const LoginPage = () => {
  const { email, updateEmail, password, updatePassword, loginMutation } = useLogin();

  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo} />
      <Text style={[styles.description, styles.paddingDescription]}>{STRINGS.DESCRIPTION}</Text>
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
  );
};

export { LoginPage };
