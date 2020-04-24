import {NEW_MESSAGES as ACTION_TYPES} from "src/store/actionTypes";

export const setNewMessage = (message) => dispatch => {
    dispatch(dataSuccess(message))
};

export const resetNewMessage = () => dispatch => {
    dispatch(dataLoading())
}

const dataLoading = () => ({
    type: ACTION_TYPES.LOADING
});
const dataSuccess = (data) => ({
    type: ACTION_TYPES.SUCCESS,
    data
});
