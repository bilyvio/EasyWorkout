import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',

  },
  grey: {
    color: colors.grey,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'QuicksandBold',
  },
});
