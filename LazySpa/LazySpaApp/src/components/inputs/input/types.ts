import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export type LSInputPropsType = {
  value: string;
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
  isEditable?: boolean;
  isDisabled?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  error?: string | undefined | null;
};
