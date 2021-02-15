import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    height: 73,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    // display: 'flex',
    minWidth: '40px',
    justifyContent: 'space-between'
  },
  tabItem: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
