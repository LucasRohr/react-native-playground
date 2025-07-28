import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SimpleButtonPage, SundaeSummaryPage } from './pages';

const Stack = createNativeStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SundaeDelivery">
            <Stack.Screen name="SimpleButton" component={SimpleButtonPage} options={{ title: 'Simple Button' }} />
            <Stack.Screen name="SundaeDelivery" component={SundaeSummaryPage} options={{ title: 'Sundae Delivery' }} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes; 