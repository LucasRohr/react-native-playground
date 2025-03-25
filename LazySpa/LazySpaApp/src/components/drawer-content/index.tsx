import { Text, View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Button, Drawer } from 'react-native-paper';

import { styles } from './styles';

interface DrawerContentProps extends DrawerContentComponentProps {}

const DrawerContent = ({ navigation }: DrawerContentProps) => {
  return (
    <DrawerContentScrollView>
      <Drawer.Section style={styles.container}>
        <Text> Hi User! </Text>
        <Button
          icon="home"
          mode="contained"
          onPress={() => navigation.navigate('Home')}>
          Home
        </Button>
      </Drawer.Section>
      <View style={styles.container}>
        <Button icon="logout" mode="contained" onPress={() => {}}>
          Sair
        </Button>
      </View>
    </DrawerContentScrollView>
  );
};

export { DrawerContent };
