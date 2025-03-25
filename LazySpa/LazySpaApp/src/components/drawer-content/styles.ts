import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.black,
  },
  headerButtonText: {
    color: Colors.black,
  },
  login: {
    borderColor: Colors.black,
  },
});
