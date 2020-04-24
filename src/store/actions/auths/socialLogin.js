import {AUTH as ACTION_TYPES} from "src/store/actionTypes";
import {AsyncStorage} from "react-native";
import axios from "axios";
import {AUTH_STORAGE} from "src/constants/storages";

export const tokenLogin = (access_token) => dispatch => {
    if (!access_token || access_token === "") {
        dispatch(dataFailed());
        return false;
    }
    dispatch(dataLoading());
    axios.post('https://sosanhnha.com/api/v2/login',
        {access_token, type_login: 'access_token'})
        .then(res => {
            dispatch(dataSuccess(res.data.data));
        }).catch(err => {
        dispatch(dataFailed())
    })
}


export const socialLogin = (social_token, type_social = '', type_login = 'social') => dispatch => {
    dispatch(dataLoading());
    axios.post('https://sosanhnha.com/api/v2/login',
        {social_token, type_social, type_login})
        .then(res => {
            const access_token = res.data.data.access_token;
            AsyncStorage.setItem(AUTH_STORAGE, access_token).then(() => {
                dispatch(dataSuccess(res.data.data));
            });
        }).catch(err => {
        dispatch(dataFailed())
    })
}

const dataLoading = () => ({
    type: ACTION_TYPES.LOADING
});
const dataSuccess = (data) => ({
    type: ACTION_TYPES.SUCCESS,
    data: {
        access_token: data.access_token,
        token_notify: data.token_notify,
        ...data.user_info
    }
});

const dataFailed = () => ({
    type: ACTION_TYPES.FAILED
});
