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
    justifyContent: 'center',
    alignItems: 'center'
  },

  sectionTitle: {
    top: '15%',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 23,
    color: '#FFFFFF',
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    height: '7.5%',
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
  nameText: {
    marginLeft: 17,
    fontFamily: 'Quicksand_700Bold',
    fontSize: 20,
    color: '#707070',
  },
  contraindicationsText: {
    marginLeft: 19,
    marginTop: 20,
    fontFamily: 'Quicksand_700Bold',
    fontSize: 18,
    lineHeight: 22.5,
    color: '#820E0E',
  },
  descriptionText: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#707070',
  }
});
