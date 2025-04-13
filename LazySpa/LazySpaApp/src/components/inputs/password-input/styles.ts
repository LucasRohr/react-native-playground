import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: COLORS.background,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 4,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  label: {
    color: COLORS.text,
    fontSize: FONT_SIZES.normal,
    marginBottom: 8,
  },
  input: {
    width: '100%',
  },
  errorMessage: {
    color: COLORS.error,
    fontSize: FONT_SIZES.normal,
    marginTop: 8,
  },
  visibilityToggle: {
    position: 'absolute',
    right: 0,
    top: 4,
    padding: 8,
  },
});
