import React from 'react';
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

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
    return (
        <div>
            <div>
                <span>max value</span>
                <Input value={props.maxValue}
                       callback={onMaxValueChange}
                       title='number' />
            </div>
            <div>
                <span>min value</span>
                <Input value={props.minValue}
                       title='number'
                       callback={onMinValueChange}/>

            </div>

           <div>
               <Button title={'set'}
                       callback={onSetSettings}
                       disabled={disabled}/>
           </div>

        </div>
    )
}