import React from 'react';
import {SuperButton} from "../SuperButton/SuperButton";
import s from './Counter.module.css'
import {ButtonGroup, Typography} from "@mui/material";
import {increaseValueAC, resetCounterAC, setActiveCounterAC, StateType} from "../../bll/value-reducer";
import {AppRootStateType} from "../../bll/store";
import {useDispatch, useSelector} from "react-redux";

export const Counter: React.FC = () => {

    const value = useSelector<AppRootStateType, StateType>(state => state.value)
    const dispatch = useDispatch()

    const onIncCounter = () => {
        dispatch(increaseValueAC())
    }

    const onResetCounter =() => {
        dispatch(resetCounterAC())
    }
    const onSetCounter = () => {
        dispatch(setActiveCounterAC())
    }
    const disabled = value.currentCount === value.maxValue

    return(
        <div className={s.counter}>
            <Typography variant={'h4'}
                        style={{marginTop: '15px'}}
                        align={'center'}
                        color={'primary'}
                        className={value.currentCount === value.maxValue ? 'current' : ''}>
                {value.currentCount}
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