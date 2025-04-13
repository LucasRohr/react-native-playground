import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export type LSPasswordInputPropsType = {
  value: string;
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
  isEditable?: boolean;
  isDisabled?: boolean;
  showVisibilityToggle?: boolean;
  error?: string | undefined | null;
};
