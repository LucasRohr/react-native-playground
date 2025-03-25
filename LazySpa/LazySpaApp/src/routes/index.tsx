import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomePage } from '../features';

import type { RootStackParamList } from './types';

const Drawer = createDrawerNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home">{_ => <HomePage />}</Drawer.Screen>
      {/*
                <Drawer.Screen name="Login">{(props) => <Login {...props} />}</Drawer.Screen>
                <Drawer.Screen name="Treatments">{(props) => <Treatments {...props} />}</Drawer.Screen>
                <Drawer.Screen name="Appointments">{(props) => <Appointments {...props} />}</Drawer.Screen>
                <Drawer.Screen name="Staff">{(props) => <Staff {...props} />}</Drawer.Screen>
                */}
    </Drawer.Navigator>
  );
};

export { Routes };
