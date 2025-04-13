import { useCallback, useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';

import { COLORS, PASSWORD_RULES } from '../../../constants';

import { styles } from './styles';
import type { LSPasswordInputPropsType } from './types';

const LSPasswordInput = ({
  value,
  label,
  placeholder,
  error,
  isDisabled = false,
  isEditable = true,
  showVisibilityToggle = true,
  onChange,
}: LSPasswordInputPropsType) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const canEdit = useMemo(() => isEditable && !isDisabled, [isEditable, isDisabled]);

  const renderError = useCallback(() => {
    if (!error) {
      return null;
    }

    return <Text style={styles.errorMessage}>{error}</Text>;
  }, [error]);

  const renderVisibilityIcon = useCallback(() => {
    const iconName = isPasswordVisible ? 'eye-off' : 'eye';

    return (
      showVisibilityToggle && (
        <TouchableOpacity
          style={styles.visibilityToggle}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Icon name={iconName} size={20} color={COLORS.primary} />
        </TouchableOpacity>
      )
    );
  }, [isPasswordVisible]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          editable={canEdit}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={!isPasswordVisible}
          passwordRules={PASSWORD_RULES}
          onChangeText={onChange}
        />
        {renderVisibilityIcon()}
      </View>
      {renderError()}
    </View>
  );
};

export { LSPasswordInput };
