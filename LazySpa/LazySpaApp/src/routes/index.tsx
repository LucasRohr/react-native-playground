import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomePage, LoginPage } from '../features';

import type { RootStackParamList } from './types';
import { screenOptions } from './options';

const Drawer = createDrawerNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name="Home">{_ => <HomePage />}</Drawer.Screen>
      <Drawer.Screen name="Login">{_ => <LoginPage />}</Drawer.Screen>
      {/*
                <Drawer.Screen name="Treatments">{(props) => <Treatments {...props} />}</Drawer.Screen>
                <Drawer.Screen name="Appointments">{(props) => <Appointments {...props} />}</Drawer.Screen>
                <Drawer.Screen name="Staff">{(props) => <Staff {...props} />}</Drawer.Screen>
                */}
    </Drawer.Navigator>
  );
};

export { Routes };
