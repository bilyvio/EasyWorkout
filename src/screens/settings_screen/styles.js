import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 25,
    left: '39%',
    right: '0%',
    top: '6.6%',
    fontFamily: 'Quicksand',
    fontStyle: 'normal',
    fontWeight: 'bold',
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
  }
});
