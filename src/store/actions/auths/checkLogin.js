import {AUTH as ACTION_TYPES} from "src/store/actionTypes";
import {AsyncStorage} from "react-native";
import axios from "axios";
import {AUTH_STORAGE} from "src/constants/storages";

export const checkLogin = () => dispatch => {
    AsyncStorage.getItem(AUTH_STORAGE).then((token)=>{
        console.log(token)
    })
};

const dataLoading = () => ({
    type: ACTION_TYPES.LOADING
});
const dataSuccess = (data) => ({
    type: ACTION_TYPES.SUCCESS,
    data
});
