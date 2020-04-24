import {combineReducers} from "redux";
import chatToken from './chatToken';
import auth from './auth';
import newMessage from "./messages/newMessage";
import boxChat from './boxChat'

export default combineReducers({
    chatToken, auth, newMessage, boxChat
});
