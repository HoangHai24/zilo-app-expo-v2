import React, {useState} from 'react';
import {StyleSheet, View, Text, Platform, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {apiPut, apiPost} from "src/apis";


const ChatForm = (props) => {
    const {con_id, chatToken} = props;
    const [message, setMessage] = useState("");
    const handleSend = () => {
        if (message.trim() !== "") {
            const dataPost = {
                access_token: chatToken.token,
                con_id,
                data: {
                    type: "text",
                    data: {
                        text: message,
                    }
                }
            }
            apiPost('messages', dataPost
            ).then(res => {

            })
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.box}>
                <TextInput value={message} onChangeText={(mes) => setMessage(mes)} placeholder="Nhập tin nhắn "/>
                <TouchableOpacity onPress={handleSend}>
                    <Text>SEND</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({});

const mapStateToProps = state => ({
    chatToken: state.chatToken
})
export default connect(mapStateToProps)(ChatForm);
