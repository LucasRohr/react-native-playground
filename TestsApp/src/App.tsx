import { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { parseColorName } from './utils';

function App() {
  const [color, setColor] = useState<string>('mediumorchid')
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

  const nextColor = useMemo(() => (color === 'mediumorchid' ? 'midnightblue' : 'mediumorchid'), [color]);
  const nextColorLabel =
    useMemo(() => (color === 'mediumorchid' ? parseColorName(nextColor, 'midnight') : parseColorName(nextColor, 'medium')), [color, nextColor]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID='button'
        style={[styles.button, { backgroundColor: isButtonDisabled ? 'gray' : color }]}
        disabled={isButtonDisabled}
        onPress={() => setColor(nextColor)}
      >
        <Text style={styles.buttonText}>Change to {nextColorLabel}</Text>
      </TouchableOpacity>
      <CheckBox
        disabled={false}
        value={isButtonDisabled}
        onValueChange={(newValue) => setIsButtonDisabled(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
