import {
    increaseValueAC,
    maxValueChangeAC,
    minValueChangeAC,
    resetCounterAC, setActiveCounterAC, setSettingsAC,
    StateType,
    valueReducer
} from "./value-reducer";

let initialState: StateType

beforeEach(() => {
    initialState = {
        minValue: 0,
        maxValue: 5,
        currentCount: 0,
        active: false
    }
  }
)
test('value should be increase', () => {

    const newValue = valueReducer(initialState, increaseValueAC())

    expect(newValue.currentCount).toBe(1)
})
test('value should be reset to the min value', () => {

    const newValue = valueReducer(initialState, resetCounterAC())

    expect(newValue.currentCount).toBe(0)
})
test('max value should be change', () => {

    const newValue = valueReducer(initialState, maxValueChangeAC(6))

    expect(newValue.maxValue).toBe(6)
})
test('mix value should be change', () => {

    const newValue = valueReducer(initialState, minValueChangeAC(1))

    expect(newValue.minValue).toBe(1)
})
test('counter should be active', () => {

    const newValue = valueReducer(initialState, setActiveCounterAC())

    expect(newValue.active).toBe(true)
})
test('counter should be switch to settings', () => {

    const newValue = valueReducer(initialState, setSettingsAC())

    expect(newValue.active).toBe(false)
    expect(newValue.currentCount).toBe(0)
})
