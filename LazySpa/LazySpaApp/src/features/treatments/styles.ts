import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, PADDINGS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: COLORS.background,
    paddingHorizontal: PADDINGS.pageHorizontal,
    paddingVertical: PADDINGS.pageVertical,
  },
  title: {
    color: COLORS.primary,
    fontSize: FONT_SIZES.extraBig,
    marginBottom: 12,
  },
  description: {
    color: COLORS.text,
    fontSize: FONT_SIZES.normal,
    marginBottom: 24,
  },
  errorMessage: {
    color: COLORS.error,
    fontSize: FONT_SIZES.big,
    marginTop: 24,
  },
  loaderWrapper: {
    marginTop: 32,
    alignSelf: 'center',
  },
  listSeparator: {
    height: 20,
  },
});
