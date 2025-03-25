import { Image, Text, View } from 'react-native';
import { useLogin } from './hooks';
import { LOGO } from '../../assets';

import { styles } from './styles';
import { STRINGS } from './strings';

const LoginPage = () => {
  const { email, updateEmail, password, updatePassword, loginMutation } = useLogin();

  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.logo} />
      <Text style={[styles.description, styles.paddingDescription]}>{STRINGS.NO_LOGGED_USER}</Text>
      <Text style={[styles.description, styles.paddingDescription]}>{STRINGS.DESCRIPTION}</Text>
    </View>
  );
};

export { LoginPage };
