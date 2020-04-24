import React from 'react';
import {View} from 'react-native';
import {connect} from "react-redux";
import ChatContent from "src/screens/container/Chat/ChatContent";
import ChatForm from "src/components/ChatForm";
import {apiPost} from "src/apis";

const ChatBox = (props) => {
    const {con_id, id} = props.route.params;
    const handleSendMessage = (message, type) => {
        if (message.trim() !== "") {
            const dataPost = {
                access_token: props.chatToken.token,
                con_id,
                data: {
                    type,
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
        <View style={{flex: 1}}>
            <ChatContent con_id={con_id} toId={id}/>
            <ChatForm onSend={handleSendMessage}/>
        </View>
    );
};

const mapStateToProps = state => ({
    chatToken: state.chatToken
})
export default connect(mapStateToProps)(ChatBox);
