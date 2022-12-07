import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    increaseValueAC,
    maxValueChangeAC,
    minValueChangeAC,
    resetCounterAC,
    setActiveCounterAC, setSettingsAC,
    StateType
} from "./state/value-reducer";

const App = () => {

    const value = useSelector<AppRootStateType, StateType>(state => state.value)
    const dispatch = useDispatch()

    const onIncCounter = () => {
        if (value.currentCount < value.maxValue) {
            dispatch(increaseValueAC())
    }}

    const onResetCounter = () => {
        dispatch(resetCounterAC())
    }
    const onMaxValueChange = (value: number) => {
        dispatch(maxValueChangeAC(value))
    }
    const onMinValueChange = (value: number) => {
        dispatch(minValueChangeAC(value))
    }
    const onSetActiveCounter = () => {
        dispatch(setActiveCounterAC())
    }
    const onSetSettings = () => {
        dispatch(setSettingsAC())
    }

    return <div className="App">
        {
            value.active
                ? <Settings maxValue={value.maxValue}
                            minValue={value.minValue}
                            onSetSettings={onSetSettings}
                            onMinValueChange={onMinValueChange}
                            onMaxValueChange={onMaxValueChange}/>
                : <Counter currentCount={value.currentCount}
                           maxValue={value.maxValue}
                           onSetActiveCounter={onSetActiveCounter}
                           onResetCounter={onResetCounter}
                           onIncCounter={onIncCounter}/>
        }
    </div>
}
export default App

