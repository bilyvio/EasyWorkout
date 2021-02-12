import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  titleView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '7.5%'
  },

  textView: {
    height: '75%',
    justifyContent: 'flex-end',
  },
  highTextView: {
    alignItems: 'center',
    marginBottom: '5%',
  },
  lowTextView: {
    paddingLeft: '2%'
  },
  buttonView: {
    height: '17.5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBar: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
    color: '#EE4733'
  },
  lowTextBar: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
    lineHeight: 30,
    color: '#707070'
  },
  lowerTextBar: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#DE4922',
  },
  buttonBar: {
    width: 320,
    height: 50,
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
