export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

export type LSButtonPropsType = {
  title: string;
  type?: ButtonType;
  isDisabled?: boolean;
  onPress: () => void;
};
