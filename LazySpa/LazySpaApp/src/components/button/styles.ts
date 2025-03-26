import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, PADDINGS } from '../../constants';

const baseStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: PADDINGS.regularButton,
    borderWidth: 2,
    borderRadius: 4,
  },
  title: {
    fontSize: FONT_SIZES.normal,
    fontWeight: '500',
  },
});

export const primaryStyles = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: COLORS.primary,
  },
  title: {
    ...baseStyles.title,
    color: COLORS.textButtonPrimary,
  },
});

export const secondaryStyles = StyleSheet.create({
  container: {
    ...baseStyles.container,
    backgroundColor: COLORS.secondary,
  },
  title: {
    ...baseStyles.title,
    color: COLORS.textButtonSecondary,
  },
});
