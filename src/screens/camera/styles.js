import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  navBar: {
    height: 95,
    backgroundColor: '#EE4733',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
    // justifyContent: 'space-between'
  },

  sectionTitle: {
    top: '5%',
    fontFamily: 'Quicksand_700Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 23,
    lineHeight: 25,
    color: '#FFFFFF',
    alignSelf: 'center'
  },

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
    height: 90,
    left: '82%',
    right: '80%',
    alignItems: 'center',
    justifyContent: 'center'
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
    minHeight: '40%',
    alignSelf: 'center',
    color: colors.white
  }
});
