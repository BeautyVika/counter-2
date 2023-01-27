import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {useSelector} from "react-redux";
import { AppRootStateType} from "./bll/store";
import { StateType} from "./bll/value-reducer";

const App = () => {

    const value = useSelector<AppRootStateType, StateType>(state => state.value)

    return <div className="App">

        {value.active ? <Settings/> : <Counter/>}

    </div>
}
export default App

