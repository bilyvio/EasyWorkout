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
    height: 60,
    left: '13.13%',
    right: '-1.6%',
    top: '68.5%',
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 49,
    lineHeight: 61,
    color: '#FFFFFF'
  },
  lowTextBar: {
    position: 'absolute',
    height: 18,
    left: '13%',
    right: '16.93%',
    top: '77%',
    fontFamily: 'QuicksandVariable',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 18,
    color: '#FFFFFF'

  },
  lowerTextBar: {
    position: 'absolute',
    height: 18,
    left: '26.97%',
    right: '25.36%',
    top: '80%',
    fontFamily: 'QuicksandVariable',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 17,
    color: '#FFFFFF'

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
