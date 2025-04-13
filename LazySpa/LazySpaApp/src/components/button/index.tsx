import { useCallback, useMemo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { ButtonType, type LSButtonPropsType } from './types';
import { primaryStyles, secondaryStyles } from './styles';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS } from '../../constants';

const LSButton = ({
  title,
  type = ButtonType.PRIMARY,
  isDisabled = false,
  isLoading = false,
  onPress,
}: LSButtonPropsType) => {
  const styleOptions = useMemo(() => {
    const isPrimary = type === ButtonType.PRIMARY;

    return isPrimary ? primaryStyles : secondaryStyles;
  }, [type]);

  const renderContent = useCallback(() => {
    const isPrimary = type === ButtonType.PRIMARY;
    const loaderColor = isPrimary ? COLORS.secondary : COLORS.primary;

    if (!isLoading) {
      return <Text style={styleOptions.title}>{title}</Text>;
    }

    return <ActivityIndicator size="small" color={loaderColor} />;
  }, [type, isLoading]);

  return (
    <TouchableOpacity style={styleOptions.container} disabled={isDisabled} onPress={onPress}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export { LSButton };
