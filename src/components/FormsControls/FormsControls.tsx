import React from 'react';
import styles from './FormsControls.module.css'


type TextareaPropsType = HTMLFormElement & { placeholder: string }

const FormControl = ({input, meta,child,element, ...props}: any) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span className={styles.error}>some error</span>}
            </div>
        </div>)
}


export const Textarea = (props: any) => {
    const {input,meta,child,...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props: any) => {
    const {input,meta,child,...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}