import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  textBar: {
    top: '3%',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
    color: '#EE4733'
  },
  lowTextBar: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '40%',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
    lineHeight: 30,
    color: '#707070'
  },
  lowerTextBar: {
    top: '42%',
    fontFamily: 'Quicksand_700Bold',
    padding: 10,
    fontSize: 18,
    lineHeight: 22,
    display: 'flex',
    alignItems: 'center',
    color: '#DE4922',

  },
  buttonBar: {
    width: 320,
    height: 50,
    top: '46%',
    backgroundColor: '#EE4733',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 2.84,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,

  },
  buttonText: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 20,
    color: '#FEFDFC',
  }
});
