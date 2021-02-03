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
    height: 30,
    top: '7%',
    alignItems:'center',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
    lineHeight: 30,
    color: '#CC3913'
  },
  lowTextBar: {
    top: '63%',
    fontFamily: 'Quicksand_700Bold',
    padding: 10,
    fontSize: 16,
    lineHeight: 20,
    alignItems: 'center',
    color: '#FFFFFF',
  },
  buttonBar: {
    width: 320,
    height: 50,
    top:'65%',
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