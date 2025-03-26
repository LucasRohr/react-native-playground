import { TouchableOpacity, Text } from 'react-native';

import { ButtonType, type LSButtonPropsType } from './types';
import { useMemo } from 'react';
import { primaryStyles, secondaryStyles } from './styles';

const LSButton = ({
  title,
  type = ButtonType.PRIMARY,
  isDisabled = false,
  onPress,
}: LSButtonPropsType) => {
  const styleOptions = useMemo(() => {
    const isPrimary = type === ButtonType.PRIMARY;

    return isPrimary ? primaryStyles : secondaryStyles;
  }, [type]);

  return (
    <TouchableOpacity style={styleOptions.container} disabled={isDisabled} onPress={onPress}>
      <Text style={styleOptions.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export { LSButton };
