import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  titleBar: {
    color: "#FFFFFF",
    fontSize: 49,
    fontFamily: 'Quicksand_700Bold',
  },
  textBar: {
    fontSize: 16,
    lineHeight: 27,
    color: '#FFFFFF',
    fontFamily: 'Quicksand_500Medium'
  },
  textView: {
    height: '82.5%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonView: {
    height: '17.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBar: {
    width: 320,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 90,
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonText: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 20,
    color: '#EC7E61',
  }
});
