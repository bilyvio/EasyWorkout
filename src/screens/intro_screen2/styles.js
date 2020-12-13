import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: '#EE4733'
  },
  textBar: {
    position: 'absolute',
    height: 30,
    left: '21%',
    right: '0%',
    top: '7%',
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    color: '#CC3913'
  },
  lowTextBar: {
    position: 'absolute',
    height: 200,
    left: '1.6%',
    right: '-2.67%',
    top: '67%',
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',

  },
  buttonBar: {
    position: 'absolute',
    width: 320,
    height: 50,
    left: 50,
    top: '87%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 2,
    borderRadius: 90,
  },
  buttonText: {
    position: 'absolute',
    height: 25,
    left: '41%',
    right: '4.41%',
    top: '30%',
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#EC7E61',
  }
});
