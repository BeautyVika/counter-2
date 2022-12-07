type IncreaseMaxValueACType = {
    type: 'INCREASE-VALUE'
}
type ResetCounterACType ={
    type: 'RESET-COUNTER'
}
type MaxValueChangeACType ={
    type: 'MAX-VALUE-CHANGE'
    value: number
}
type MinValueChangeACType ={
    type: 'MIN-VALUE-CHANGE'
    value: number
}
type SetActiveCounterACType = {
    type: 'SET-ACTIVE-COUNTER'
}
type SetSettingsACType = {
    type: 'SET-SETTINGS'
}

export type StateType ={
    minValue: number
    maxValue: number
    currentCount: number
    active: boolean
}
let initialState: StateType = {
    minValue: 0,
    maxValue: 5,
    currentCount: 0,
    active: false
}
type ActionType = IncreaseMaxValueACType | ResetCounterACType | MaxValueChangeACType
                  | MinValueChangeACType | SetActiveCounterACType | SetSettingsACType

export const valueReducer = (state =initialState, action: ActionType): StateType => {
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
        default:
            return state
    }

}
export const increaseValueAC = (): IncreaseMaxValueACType => {
    return { type: 'INCREASE-VALUE'} as const
}
export const resetCounterAC = (): ResetCounterACType => {
    return { type: 'RESET-COUNTER'} as const
}
export const maxValueChangeAC = (value: number): MaxValueChangeACType => {
    return { type: 'MAX-VALUE-CHANGE', value} as const
}
export const minValueChangeAC = (value: number): MinValueChangeACType => {
    return { type: 'MIN-VALUE-CHANGE', value} as const
}
export const setActiveCounterAC = (): SetActiveCounterACType => {
    return { type: 'SET-ACTIVE-COUNTER'}
}
export const setSettingsAC = (): SetSettingsACType => {
    return { type: 'SET-SETTINGS'}
}