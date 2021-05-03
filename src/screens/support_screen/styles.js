import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    navBar: {
        height: 90,
        backgroundColor: '#EE4733',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
        // justifyContent: 'space-between'
    },
    sectionTitle: {
        top: '5%',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 23,
        lineHeight: 25,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    question: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft:27,
        top: 25
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 50,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 90,
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
        borderColor: '#a4a2aa',
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
        top: 300,
    },
})
