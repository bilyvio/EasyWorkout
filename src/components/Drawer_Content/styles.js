import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menuTitleBar : {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        height: 80,
        borderBottomColor:"#a4a2aa",
        marginLeft: "15%",
        paddingRight: "15%",
        marginBottom: "10%",

    },
    menuTitleText : {
        fontFamily: "Quicksand_700Bold",
        fontSize: 22,
        color: "#a4a2aa"
    },
    buttonStyle: {
        alignItems: "center",
        marginTop: '5%',
        flexDirection: 'row',
        height: 40
    },
    buttonStyleText: {
        fontFamily: "Quicksand_700Bold",
        fontSize: 16,
        color: "#a4a2aa",
    },
    icons: {
        width: 40,
        alignItems: 'center',
        marginRight: '8%'
    }
});
