import { useCallback, useMemo } from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import type { LSInputPropsType } from './types';

const LSInput = ({
  value,
  label,
  placeholder,
  onChange,
  isEditable = true,
  isDisabled = false,
  autoCapitalize = 'none',
  error,
}: LSInputPropsType) => {
  const canEdit = useMemo(() => isEditable && !isDisabled, [isEditable, isDisabled]);

  const renderError = useCallback(() => {
    if (!error) {
      return null;
    }

    return <Text style={styles.errorMessage}>{error}</Text>;
  }, [error]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        editable={canEdit}
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        onChangeText={onChange}
      />
      {renderError()}
    </View>
  );
};

export { LSInput };
