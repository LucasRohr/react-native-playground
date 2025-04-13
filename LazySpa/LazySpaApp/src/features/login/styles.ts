import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, PADDINGS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.pageHorizontal,
  },
  description: {
    fontSize: FONT_SIZES.normal,
    color: COLORS.primary,
    lineHeight: FONT_SIZES.extraBig,
    textAlign: 'center',
  },
  paddingDescription: {
    paddingBottom: 60,
  },
  logo: {
    width: 200,
    height: 200,
  },
  inputsWrapper: {
    width: '100%',
    marginBottom: 20,
  },
});
