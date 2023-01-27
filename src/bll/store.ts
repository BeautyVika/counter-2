import {valueReducer} from "./value-reducer";
import {combineReducers, legacy_createStore} from "redux";
import {loadState, saveState} from "../utils/localStorage-utils";


const rootReducer = combineReducers({
    value: valueReducer,
})


export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
   saveState({
       value: store.getState().value
   })
})
export type AppRootStateType = ReturnType<typeof rootReducer>



