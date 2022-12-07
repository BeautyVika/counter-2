import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function AppWithLocal() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [currentCount, setCurrentCount] = useState(minValue)
    const [active, setActive] = useState(false)

    useEffect(() => {
        const valueMin = localStorage.getItem('minValue') ?? 0
        const valueMax = localStorage.getItem('maxValue') ?? 0

        setMinValue(+valueMin)
        setMaxValue(+valueMax)

    },[])

    const setLocalStorage = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    const onIncCounter = () => {
        if (currentCount < maxValue){
            setCurrentCount(currentCount + 1)}
    }
    const onResetCounter =() => {
        setCurrentCount(0)
    }
    const onMaxValueChange = (value: number) => {
        setMaxValue(value)
    }
    const onMinValueChange = (value: number) => {
        setMinValue(value)
    }
    const onSetActiveCounter =() => {
        setActive(!active)
    }
    const onSetSettings = () => {
        setActive(!active)
        setCurrentCount(minValue)
        setLocalStorage()
    }

    return (
        <div className="App">
            {
                active
                ?  <Settings maxValue={maxValue}
                             minValue={minValue}
                             onSetSettings={onSetSettings}
                             onMinValueChange={onMinValueChange}
                             onMaxValueChange={onMaxValueChange}/>
                :  <Counter currentCount={currentCount}
                            maxValue={maxValue}
                            onSetActiveCounter={onSetActiveCounter}
                            onResetCounter={onResetCounter}
                            onIncCounter={onIncCounter}/>
            }
        </div>
    );
}

export default AppWithLocal;
