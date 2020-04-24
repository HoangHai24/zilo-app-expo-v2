import {AUTH as ACTION_TYPES} from 'src/store/actionTypes';

const initialState = {
    status: 0,
    data: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOADING:
            return dataLoading();
        case ACTION_TYPES.SUCCESS:
            return dataSuccess(state, action.data);
        case ACTION_TYPES.FAILED:
            return dataFailed(state);
        case ACTION_TYPES.LOGOUT:
            return dataLogout();
        default:
            return state;
    }
}

const dataLoading = () => initialState;

const dataLogout = ()=>{
    const stateUpdate = {
        status: 401,
        data: {}
    }
    return {...state, ...stateUpdate}
}

const dataSuccess = (state, data) => {
    const stateUpdate = {
        status: 200,
        data
    }
    return {...state, ...stateUpdate}
};

const dataFailed = (state) => {
    const stateUpdate = {
        status: 401,
        data: {}
    }
    return {...state, ...stateUpdate}
}
