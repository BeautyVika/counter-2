import React from 'react';
import {SuperButton} from "../SuperButton/SuperButton";
import {Input} from "../Input/Input";
import s from './Settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {maxValueChangeAC, minValueChangeAC, setSettingsAC, StateType} from "../../bll/value-reducer";
import {AppRootStateType} from "../../bll/store";


export const Settings: React.FC = () => {

    const value = useSelector<AppRootStateType, StateType>(state => state.value)
    const dispatch = useDispatch()

    const onSetSettings =() => {
        dispatch(setSettingsAC())
    }
    const onMaxValueChange = (value: number) => {
        dispatch(maxValueChangeAC(value))
    }
    const onMinValueChange = (value: number) => {
        dispatch(minValueChangeAC(value))
    }
    const disabled = value.maxValue === value.minValue || value.minValue < 0 || value.minValue > value.maxValue

    const classNameInput = (value.maxValue <= value.minValue || value.minValue < 0 || value.maxValue < 0)
        ? s.valueInput + ' ' + s.error : s.valueInput

    return (
        <div className={s.settings}>
            <div className={s.max}>
                <span className={s.value}>max value</span>
                <Input value={value.maxValue}
                       callback={onMaxValueChange}
                       title='number'
                       className={classNameInput}/>
            </div>
            <div className={s.max}>
                <span className={s.value}>min value</span>
                <Input value={value.minValue}
                       title='number'
                       callback={onMinValueChange}
                       className={classNameInput}/>
            </div>

           <div className={s.btn}>
               <SuperButton title={'set'}
                       callback={onSetSettings}
                       disabled={disabled}/>
           </div>

        </div>
    )
}