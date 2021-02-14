import React from 'react';
import {styles} from './styles'
import {
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';

const Sup = ({ navigation }) => {
    const buttonClickedHandler = () => {
        console.log();
    };
    return (
        <View>
            <View style={styles.question}>
                <Text style={styles.lowerTextBar}>What do you need from us?</Text>
            </View>
            <View style={styles.container1}>
                <TextInput placeholder = "Email" style = { styles.input1 }/>
            </View>
            <View style={styles.container2}>
                <TextInput placeholder = "Enter your problem" style={styles.input2}  multiline={true}/>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.roundButton1}>
                    <Text style={styles.textSend}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default Sup;

