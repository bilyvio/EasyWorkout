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
    alignItems: 'flex-end',
    // display: 'flex',
    justifyContent: 'space-evenly'
  },
  tabItem: {
    height: 80,
    left: '84%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
