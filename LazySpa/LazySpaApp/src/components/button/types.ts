export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

export type LSButtonPropsType = {
  title: string;
  type?: ButtonType;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
};
