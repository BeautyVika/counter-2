import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "./bll/store";
import {setValueFromLocalStorageTC, StateType} from "./bll/value-reducer";

const App = () => {

    const value = useSelector<AppRootStateType, StateType>(state => state.value)
    const dispatch = AppDispatch()

    useEffect(() => {
        dispatch(setValueFromLocalStorageTC())

    }, [])


    return <div className="App">

        {value.active ? <Settings/> : <Counter/>}

    </div>
}
export default App

