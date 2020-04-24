import React, {createContext, useState, useEffect} from 'react';
import {connect} from 'react-redux';

import io from 'socket.io-client';
import {setChatToken,setNewMessage} from "src/store/actions";

export const SocketContext = createContext({
    socket: null
})

const Socket = props => {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        connectSocket();
        return ()=>{
            if(socket){
                console.log('off channel')
                socket.off();
            }
        }
    }, [])

    const connectSocket = () => {
        if(socket){
            socket.off();
        }
        try {
            const socket = io.connect('https://chat.vatgia.vn', {
                transports: ['websocket'],
                reconnectionAttempts: 15
            });
            socket.on('connect', () => {
                socket.emit('get_token', {channels: [props.auth.data.id]});
                socket.on('get_token', (data_token) => {
                    props.setChatToken(data_token.token)
                })
                socket.on('chat', (data) => {
                    props.setNewMessage(data);
                })

                socket.on('disconnect', (reason) => {
                    console.log('reason disconnect', reason);
                    socket.off('get_token');
                    socket.off('chat');
                })
                setSocket(socket)
            });

        } catch (err) {
            setSocket(null)
        }
    }
    return (<SocketContext.Provider value={
        {
            socket
        }
    }>
        {props.children}
    </SocketContext.Provider>)
}
const mapStateToProps = state=>({
    auth: state.auth
})
const mapDispatchToProps = dispatch => ({
    setChatToken: (token) => dispatch(setChatToken(token)),
    setNewMessage: (mes) => dispatch(setNewMessage(mes)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Socket)
