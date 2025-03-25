import { useCallback } from 'react';
import { Image, Text, View } from 'react-native';

import { useUserStore } from '../../store';

import { styles } from './styles';
import { STRINGS } from './strings';
import { LOGO } from '../../assets';

const HomePage = () => {
  const user = useUserStore(state => state.user);

  const renderContent = useCallback(() => {
    if (!user) {
      <View style={styles.container}>
        <Text style={styles.description}>{STRINGS.WELCOME_MESSAGE}</Text>
        <Text style={styles.description}>{STRINGS.DESCRIPTION}</Text>
      </View>;
    }

    return (
      <View style={styles.container}>
        <Image source={LOGO} style={styles.logo} />
        <Text style={[styles.description, styles.paddingDescription]}>
          {STRINGS.NO_LOGGED_USER}
        </Text>
      </View>
    );
  }, [user]);

  return renderContent();
};

export { HomePage };
