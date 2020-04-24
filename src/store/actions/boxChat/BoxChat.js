import {BOX_CHAT as ACTION_TYPES} from "src/store/actionTypes";

export const openBoxChat = (id) => dispatch => {
    dispatch(dataOpen(id))
};

export const closeBoxChat = ()=> dispatch =>{
    dispatch(dataClose())
}

const dataClose = () => ({
    type: ACTION_TYPES.CLOSE
});
const dataOpen = (id) => ({
    type: ACTION_TYPES.OPEN,
    id
});
