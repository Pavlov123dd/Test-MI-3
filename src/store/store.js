import {configureStore, combineReducers} from '@reduxjs/toolkit'

import list from './list/reducer'

const rootReducer = combineReducers({list})

const store = configureStore({
    reducer: rootReducer
});
export default store;
