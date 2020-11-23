import React from 'react';
import style from './FormsControls.module.css'


type TextareaPropsType = HTMLFormElement & { placeholder: string }

const FormControl = ({input, meta: {touched, error}, children, element,}: any) => {
    const hasError = touched && error

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span className={style.error}>some error</span>}
            </div>
        </div>)
}

export const Textarea = (props: TextareaPropsType) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input className={style.input} {...input} {...restProps}></input></FormControl>
}
