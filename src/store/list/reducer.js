import {
    ACTION_SET_USERS,
    ACTION_FILTER_USERS,
    ACTION_FILTER_RESET,
    ACTION_MODAL_OPEN,
    ACTION_VEHICLES,
    ACTION_CLEAR_VEHICLES
} from "./actions";

const INITIAL_STATE = {
    userList: [],
    modalWindowActive: false,
    userCar: []
};

const reducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case ACTION_SET_USERS:
            return {...state, userList: payload}
        case ACTION_FILTER_USERS:
            return {...state, userList: payload}
        case ACTION_FILTER_RESET:
            return {...state, userList: payload}
        case ACTION_MODAL_OPEN:
            return {...state, modalWindowActive: payload}
        case ACTION_VEHICLES:
            return {...state, userCar: [...state.userCar, payload]}
        case ACTION_CLEAR_VEHICLES:
            return {...state, userCar: payload}
        default:
            return state
    }
};

export default reducer;