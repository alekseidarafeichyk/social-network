import React from 'react';
import styles from './FormsControls.module.css'


type TextareaPropsType = HTMLFormElement & { placeholder: string }

const FormControl = ({input, meta: {touched, error}, children, element,}: any) => {
    const hasError = touched && error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span className={styles.error}>some error</span>}
            </div>
        </div>)
}

export const Textarea = (props: TextareaPropsType) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}

