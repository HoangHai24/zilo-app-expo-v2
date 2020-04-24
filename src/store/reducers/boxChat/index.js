import {BOX_CHAT as ACTION_TYPES} from 'src/store/actionTypes';

const initialState = {
    status: 0,
    id: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CLOSE:
            return dataClose();
        case ACTION_TYPES.OPEN:
            return dataOpen(state, action.id);
        default:
            return state;
    }
}

const dataClose = () => initialState;

const dataOpen = (state, id) => {
    return {
        ...state, ...{
            id,
            status: 200
        }
    }
};
