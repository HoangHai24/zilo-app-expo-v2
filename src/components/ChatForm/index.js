import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Keyboard
} from 'react-native';

const ChatForm = (props) => {
    const {onSend} = props;
    const [mes, setMes] = useState('');
    const [type, setType] = useState('text');

    const handleSend = () => {
        onSend(mes, type);
        setMes("");
        setType("text")
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.box}>
                <View style={styles.boxInput}>
                    <TextInput style={styles.input} value={mes} onChangeText={(mes) => setMes(mes)}
                               placeholder="Nhập tin nhắn "/>
                </View>
                <TouchableOpacity onPress={handleSend} style={styles.btnSend}>
                    <Text>SEND</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    box: {
        backgroundColor: "#fff",
        borderTopColor: "#ddd",
        borderTopWidth: 1,
        flexDirection: "row",
        width: "100%",
        height: 60
    },
    btnSend: {
        width: 80
    },
    boxInput: {
        flex: 1,
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    input: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ddd",
        borderRadius: 30,
        paddingHorizontal: 12
    }
});
export default ChatForm;
