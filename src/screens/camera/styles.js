import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  viewBox: {
    flex: 1,
    backgroundColor: colors.transparent,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  buttonStyles: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.black
  },
  loadingContainer: {
    minHeight: '200px',
    alignSelf: 'center',
    color: colors.white
  }
});
