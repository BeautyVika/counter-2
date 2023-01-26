import {Dispatch} from "redux";

let initialState = {
    minValue: 0,
    maxValue: 5,
    currentCount: 0,
    active: false
}

export const valueReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch(action.type){
        case 'INCREASE-VALUE':
            return {...state, currentCount: state.currentCount + 1}
        case 'RESET-COUNTER':
            return {...state, currentCount: state.minValue}
        case 'MAX-VALUE-CHANGE':
            return {...state, maxValue: action.value}
        case 'MIN-VALUE-CHANGE':
            return {...state, minValue: action.value}
        case 'SET-ACTIVE-COUNTER':
            return {...state, active: true}
        case 'SET-SETTINGS':
            return {...state, active: false, currentCount: state.minValue}
        case 'SET-VALUE-FROM-LOCAL-STORAGE':
            return {...state, currentCount: action.currentCount}
        default:
            return state
    }
}

//actions
export const increaseValueAC = () => ({ type: 'INCREASE-VALUE'} as const)
export const resetCounterAC = () => ({ type: 'RESET-COUNTER'} as const)
export const maxValueChangeAC = (value: number) => ({ type: 'MAX-VALUE-CHANGE', value} as const)
export const minValueChangeAC = (value: number)=> ({ type: 'MIN-VALUE-CHANGE', value} as const)
export const setActiveCounterAC = ()=> ({ type: 'SET-ACTIVE-COUNTER'} as const)
export const setSettingsAC = ()=> ({ type: 'SET-SETTINGS'} as const)
export const setValueFromLocalStorageAC = (currentCount: number) =>
    ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', currentCount} as const)

//thunks
export const incValueTC = (value: number) => (dispatch: Dispatch) => {
    localStorage.setItem('currentValue', JSON.stringify(value))
    dispatch(increaseValueAC())
}
export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    const valueFromLocalStorage = localStorage.getItem('currentValue') ?? 0
    dispatch(setValueFromLocalStorageAC(+valueFromLocalStorage))
}

//types
type ActionType = ReturnType<typeof increaseValueAC>
    | ReturnType<typeof resetCounterAC>
    | ReturnType<typeof maxValueChangeAC>
    | ReturnType<typeof minValueChangeAC>
    | ReturnType<typeof setActiveCounterAC>
    | ReturnType<typeof setSettingsAC>
    | ReturnType<typeof setValueFromLocalStorageAC>

export type StateType = typeof initialState