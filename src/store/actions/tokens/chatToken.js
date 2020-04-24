import {CHAT_TOKEN as ACTION_TYPES} from "src/store/actionTypes";

export const setChatToken = (token) => dispatch=>{
    dispatch(dataSuccess(token))
}
const dataLoading = () => ({
    type: ACTION_TYPES.LOADING
});
const dataSuccess = (token) => ({
    type: ACTION_TYPES.SUCCESS,
    token
});

