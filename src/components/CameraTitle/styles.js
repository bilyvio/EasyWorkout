import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 23,
    lineHeight: 25,
    color: '#FFFFFF',
    alignSelf: 'center'
  }
});
