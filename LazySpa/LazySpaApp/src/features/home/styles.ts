import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: FONT_SIZES.extraBig,
    color: COLORS.primary,
    lineHeight: FONT_SIZES.extraBig,
  },
  paddingDescription: {
    paddingBottom: 100,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
