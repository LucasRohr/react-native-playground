import 'react-native-gesture-handler';

import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as RNPaperProvider } from 'react-native-paper';
import { QueryClientProvider } from '@tanstack/react-query';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Routes } from './routes';
import { queryClient } from './react-query';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <RNPaperProvider>
        <NavigationContainer>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Routes />
        </NavigationContainer>
      </RNPaperProvider>
    </QueryClientProvider>
  );
}

export default App;
