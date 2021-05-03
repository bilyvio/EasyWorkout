import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
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
    fontSize: 23,
    lineHeight: 25,
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  textBar: {
    position: 'absolute',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#FFFFFF'
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    height: 73,
    borderTopWidth: 1,
    top: '178%',
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
  labelStyle:{
    color: "#707070",
    fontFamily: "Quicksand_700Bold",
    fontSize: 18,
    lineHeight: 22,
  },
  settingsRow:{
    paddingTop: '5%',
    paddingBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#a6a6a6'
  },
  themeName:{
    color: "#707070",
    fontFamily: "Quicksand_500Medium",
    fontSize: 18,
    lineHeight: 22,
  },
  themeLineView:{
    paddingTop: '5%',
    marginLeft: '22%',
    justifyContent:'space-between',
    flexDirection: 'row'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#EE4733',
    marginLeft: '65%',
  }
});

