import { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

function App() {
  const [color, setColor] = useState<string>('red')
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(true)
  
  const nextColor = useMemo(() => (color === 'red' ? 'blue' : 'red'), [color]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID='button'
        style={[styles.button, { backgroundColor: toggleCheckBox ? color : 'gray' }]}
        disabled={!toggleCheckBox}
        onPress={() => setColor(nextColor)}
      >
        <Text style={styles.buttonText}>Change to {nextColor}</Text>
      </TouchableOpacity>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
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
    backgroundColor: 'red',
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
