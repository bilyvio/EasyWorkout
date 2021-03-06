import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '3%'
  },
  navBar: {
    position: 'absolute',
    width: '100%',
    height: 100,
    left: 0,
    top: 0,
    backgroundColor: '#EE4733'
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
    paddingTop: '3%',
    paddingBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#a6a6a6'
  },
  languagesRow:{
    top: '10%',
    paddingTop: '1%',
    paddingBottom: '1%',
    marginLeft: '5%',
    marginRight: '15%',
    justifyContent:'space-between',
    alignItems: 'flex-end',
    flexDirection: 'column',
  }
});

