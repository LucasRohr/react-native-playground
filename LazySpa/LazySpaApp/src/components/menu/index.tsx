import { TouchableOpacity } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { DrawerHeaderProps } from '@react-navigation/drawer';

import { styles } from './styles';

const Menu = ({ navigation }: DrawerHeaderProps) => {
  return (
    <Appbar.Header style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <Appbar.Action
        icon="menu"
        color="white"
        onPress={navigation.openDrawer}
      />
    </Appbar.Header>
  );
};

export { Menu };
