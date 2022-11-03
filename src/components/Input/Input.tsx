import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: number
    callback: (value: number) => void
    title: string
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(parseInt(e.currentTarget.value))
    }
    return <input value={props.value} onChange={onChangeHandler} type={props.title}/>
}