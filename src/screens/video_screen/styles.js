import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 23,
    lineHeight: 25,
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  rightNav: {
    flexDirection: 'row'
  },
  setColorWhite: {
    color: '#FFFFFF'
  },
  backgroundVideo: {
    position: 'absolute',
  },
  navItem: {
    marginTop: 30,
    marginLeft: 25
  },
  body: {
    flex: 1,
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
  margin3: {
    marginLeft: 10
  },
  nameText: {
    height: 25,
    marginLeft: 17,
    marginTop: 20,
    fontFamily: 'Quicksand_700Bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#707070',
  },
  contraindicationsText: {
    height: 23,
    marginLeft: 19,
    marginTop: 20,
    fontFamily: 'Quicksand_700Bold',
    fontSize: 18,
    lineHeight: 22.5,
    color: '#820E0E',
  },
  descriptionText: {
    height: 20,
    marginLeft: 50,
    fontFamily: 'Quicksand_700Bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#707070',
  }
});
