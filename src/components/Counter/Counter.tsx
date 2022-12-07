import React from 'react';
import {SuperButton} from "../SuperButton/SuperButton";
import s from './Counter.module.css'
import {ButtonGroup, Typography} from "@mui/material";

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
        <div className={s.counter}>
            <Typography variant={'h4'}
                        style={{marginTop: '15px'}}
                        align={'center'}
                        color={'primary'}
                        className={props.currentCount === props.maxValue ? 'current' : ''}>
                {props.currentCount}
            </Typography>

            <div className={s.btnGroup}>
                <ButtonGroup aria-label="outlined primary button group">
                    <SuperButton title={'inc'} disabled={disabled} callback={onIncCounter} style={{marginRight: '3px'}}/>
                    <SuperButton title={'reset'} callback={onResetCounter} style={{marginRight: '3px'}}/>
                    <SuperButton title={'set'} callback={onSetCounter} />
                </ButtonGroup>
            </div>
        </div>
    )
}