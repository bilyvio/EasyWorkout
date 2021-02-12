import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    flex: 1,
  },
  titleView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '7.5%'
  },
  textBar: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
    lineHeight: 30,
    color: '#CC3913'
  },
  lowTextBar: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  textView: {
    paddingLeft: '1%',
    height: '75%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonView: {
    height: '17.5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBar: {
    width: 320,
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 90,
  },
  buttonText: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 20,
    color: '#EC7E61',
  }
});
