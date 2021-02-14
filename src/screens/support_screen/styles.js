import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    question: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft:27,
        top: 80
    },

    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 120,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 160,
    },
    input1: {
        width: '90%',
        height: 50,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#A4A2AA',
        borderWidth: 1,
        fontFamily: 'Quicksand_700Bold',
        paddingHorizontal: 15,
        fontSize: 16,
    },
    input2: {
        width: '90%',
        height: 250,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#A4A2AA',
        borderWidth: 1,
        fontFamily: 'Quicksand_700Bold',
        paddingHorizontal: 15,
        fontSize: 16,
        textAlignVertical:'top',
        padding: 12,
    },
    lowerTextBar: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#707070',
    },
    textSend:{
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
        lineHeight: 21,
        color: '#ffffff',
    },
    roundButton1: {
        width: 320,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#EE4733',
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 400,
    },
})
