import React from 'react';

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }
    return <button onClick={onClickHandler} disabled={props.disabled}>
        {props.title}
    </button>

}