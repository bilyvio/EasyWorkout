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
    height: 31,
    left: '32.53%',
    right: '29.6%',
    top: '6.6%',
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    color: '#EE4733'
  },
  lowTextBar: {
    position: 'absolute',
    height: 100,
    width: 300,
    left: '18.83%',
    right: '27.43%',
    top: '43%',
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    color: '#707070'
  },
  lowerTextBar: {
    position: 'absolute',
    height: 300,
    left: '5%',
    right: '-0%',
    top: '53%',
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
    display: 'flex',
    alignItems: 'center',
    color: '#DE4922',

  },
  buttonBar: {
    position: 'absolute',
    width: 320,
    height: 50,
    left: 50,
    top: '87%',
    backgroundColor: '#EE4733',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 2.84,
    elevation: 5,
    justifyContent: 'center',
    padding: 2,
    borderRadius: 90,

  },
  buttonText: {
    position: 'absolute',
    height: 25,
    left: '28%',
    right: '4.41%',
    top: '30%',
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#FEFDFC',
  }
});
