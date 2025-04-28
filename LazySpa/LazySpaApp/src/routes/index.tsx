import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomePage, LoginPage, TreatmentsPage } from '../features';
import { screenOptions } from './options';
import { useUserStore } from '../store';

import type { RootStackParamList } from './types';

const Drawer = createDrawerNavigator<RootStackParamList>();

const Routes = () => {
  const user = useUserStore(store => store.user);

  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name="Home">{_ => <HomePage />}</Drawer.Screen>
      {!user && <Drawer.Screen name="Login">{props => <LoginPage {...props} />}</Drawer.Screen>}
      {user && <Drawer.Screen name="Treatments">{_ => <TreatmentsPage />}</Drawer.Screen>}
      {/*
                <Drawer.Screen name="Appointments">{(props) => <Appointments {...props} />}</Drawer.Screen>
                <Drawer.Screen name="Staff">{(props) => <Staff {...props} />}</Drawer.Screen>
                */}
    </Drawer.Navigator>
  );
};

export { Routes };
