import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, PADDINGS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.pageHorizontal,
  },
  description: {
    fontSize: FONT_SIZES.extraBig,
    color: COLORS.primary,
    lineHeight: FONT_SIZES.extraBig,
    textAlign: 'center',
    marginBottom: 20,
  },
  paddingDescription: {
    paddingBottom: 100,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
