import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  rightNav: {
    flexDirection: 'row'
  },
  setColorWhite: {
    color: '#FFFFFF'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  navBarText: {
    fontSize: 20,
    fontStyle: 'normal',
    position: 'absolute',
    lineHeight: 25,
    height: 25,
    left: '37.33%',
    right: '-49.07%',
    top: 47,
    fontFamily: 'Quicksand_700Bold',
  },
  navItem: {
    marginTop: 30,
    marginLeft: 25
  },
  body: {
    marginTop: 100,
    flex: 1
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    height: 73,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  margin1: {
    marginRight: 50
  },
  margin2: {
    marginRight: 30
  },
});
