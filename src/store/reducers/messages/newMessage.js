import {NEW_MESSAGES as ACTION_TYPES} from 'src/store/actionTypes';

const initialState = {
    status:0,
    data:{}

};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOADING:
            return dataLoading();
        case ACTION_TYPES.SUCCESS:
            return dataSuccess(state,action.data);
        default:
            return state;
    }
}

const dataLoading = ()=>initialState;

const dataSuccess = (state, data) => {
    return {...state,...{
        status:200,
            data
        }}
};
