import {valueReducer} from "./value-reducer";
import {combineReducers, legacy_createStore} from "redux";


const rootReducer = combineReducers({
    value: valueReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>