import {CHAT_TOKEN as ACTION_TYPES} from "src/store/actionTypes";

const initState = {
    status: 0,
    token: ''
};
export default (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SUCCESS:
            return dataSuccess(state, action.token)
        default:
            return state;
    }
}
const dataSuccess = (state, token) => {
    const updatedState = {
        status: 200,
        token
    };
    return {...state, ...updatedState}
};
