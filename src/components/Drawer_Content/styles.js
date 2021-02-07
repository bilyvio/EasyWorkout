import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menuTitleBar : {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        height: 80,
        borderBottomColor:"#000000",
        marginLeft: "15%",
        paddingRight: "15%"
    },
    menuTitleText : {
        fontFamily: "Quicksand_700Bold",
        fontSize: 22,
        color: "grey"
    },
    buttonStyle: {
        alignItems: "center",
        justifyContent: 'flex-end',
        height: 40
    },
    buttonStyleText: {
        fontFamily: "Quicksand_700Bold",
        fontSize: 16,
        color: "lightgray",
    },
});
