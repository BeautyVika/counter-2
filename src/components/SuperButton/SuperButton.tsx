import React from 'react';
import {Button} from "@mui/material";

type ButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
    style?: object
}

export const SuperButton = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }
    return <Button variant="contained"
                   size='small'
                   color="secondary"
                   style={props.style}
                   onClick={onClickHandler}
                   disabled={props.disabled}>
        {props.title}
    </Button>

}