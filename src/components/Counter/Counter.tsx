import React from 'react';
import {Button} from "../Button/Button";

type CounterPropsType= {
    currentCount: number
    maxValue: number
    onIncCounter: () => void
    onResetCounter: () => void
    onSetActiveCounter: () => void
}

export const Counter = (props: CounterPropsType) => {
    const onIncCounter = () => {
        props.onIncCounter()
    }
    const onResetCounter =() => {
        props.onResetCounter()
    }
    const onSetCounter = () => {
        props.onSetActiveCounter()
    }
    const disabled = props.currentCount === props.maxValue

    return(
        <div>
            <div>{props.currentCount}</div>

            <div>
                <Button title={'inc'} disabled={disabled} callback={onIncCounter} />
                <Button title={'reset'} callback={onResetCounter} />
                <Button title={'set'} callback={onSetCounter} />

            </div>
        </div>
    )
}