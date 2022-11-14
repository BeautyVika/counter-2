import React from 'react';
import {SuperButton} from "../SuperButton/SuperButton";
import {Input} from "../Input/Input";
import s from './Settings.module.css'

type SettingsPropsType = {
    maxValue: number
    minValue: number
    onSetSettings: () => void
    onMaxValueChange: (value: number) => void
    onMinValueChange: (value: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    const onSetSettings =() => {
        props.onSetSettings()
    }
    const onMaxValueChange = (value: number) => {
        props.onMaxValueChange(value)
    }
    const onMinValueChange = (value: number) => {
        props.onMinValueChange(value)
    }
    const disabled = props.maxValue === props.minValue || props.minValue < 0 || props.minValue > props.maxValue

    const classNameInput = (props.maxValue <= props.minValue || props.minValue < 0 || props.maxValue < 0)
        ? s.valueInput + ' ' + s.error : s.valueInput

    return (
        <div className={s.settings}>
            <div className={s.max}>
                <span className={s.value}>max value</span>
                <Input value={props.maxValue}
                       callback={onMaxValueChange}
                       title='number'
                       className={classNameInput}/>
            </div>
            <div className={s.max}>
                <span className={s.value}>min value</span>
                <Input value={props.minValue}
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