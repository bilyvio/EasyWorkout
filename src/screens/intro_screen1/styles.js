import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  titleBar: {
    color: "#FFFFFF",
    fontSize: 49,
    bottom: '11%',
    fontFamily: 'Quicksand_700Bold'
  },
  textBar: {
    fontSize: 16,
    lineHeight: 27,
    color: '#FFFFFF',
    bottom: '11%',
    fontFamily: 'Quicksand_500Medium'
  },
  buttonBar: {
    width: 320,
    height: 50,
    backgroundColor: '#FFFFFF',
    bottom: '3%',
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
