import {valueReducer} from "./value-reducer";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    value: valueReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const AppDispatch = () => useDispatch<AppDispatchType>()

export type AppRootStateType = ReturnType<typeof rootReducer>