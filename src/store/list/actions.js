import {getFilterUser, getUsers} from "../../services/userService";
import {getVehicle} from "../../services/carServices";

export const ACTION_SET_USERS = 'ACTION_SET_USERS';
export const setUsers = users => ({type: ACTION_SET_USERS, payload: users});

export const fetchUsersThunk = () => {

    return async (dispatch) => {
        dispatch(setUsers(await getUsers()));
    }
};


export const ACTION_FILTER_USERS = 'ACTION_FILTER_USERS';
const usersFilterAction = filterUser => ({type: ACTION_FILTER_USERS, payload: filterUser})
export const fetchFilterUsersThunk = userName => {

    return async function (dispatch) {
        dispatch(usersFilterAction(await getFilterUser(userName)))
    }
};


export const ACTION_FILTER_RESET = 'ACTION_FILTER_USERS';
const resetFilterAction = filterUser => ({type: ACTION_FILTER_RESET, payload: filterUser})
export const fetchFilterResetThunk = userName => {

    return async function (dispatch) {
        dispatch(resetFilterAction(await getFilterUser(userName)))
    }
};

export const ACTION_MODAL_OPEN = 'ACTION_MODAL_OPEN';
const behaviorModalAction = booleanItem => ({type: ACTION_MODAL_OPEN, payload: booleanItem});

export const behaviorModalThunk = (booleanItem) => {
    return function (dispatch) {
        dispatch(behaviorModalAction(booleanItem))

    }
}


export const ACTION_VEHICLES = 'ACTION_VEHICLES';

const vehiclesAction = ArrVehicles => ({type: ACTION_VEHICLES, payload: ArrVehicles});

export const vehiclesActionThunk = (ArrVehiclesApi) => {
    return async function (dispatch) {
        dispatch(vehiclesAction(await getVehicle(ArrVehiclesApi)))
    }
}


export const ACTION_CLEAR_VEHICLES = 'ACTION_CLEAR_VEHICLES';
const vehiclesClearAction = clearArr => ({type: ACTION_CLEAR_VEHICLES, payload: clearArr});

export const vehiclesClearThunk = (clearArr) => {

    return function (dispatch) {
        dispatch(vehiclesClearAction(clearArr))
    }
}

