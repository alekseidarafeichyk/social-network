import React from 'react';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import {Button} from '../../../common/Button/Button';


export type PostFormDataType = {
    newBodyPost: string
}

const maxLength15 = maxLengthCreator(15)

const AddNewPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   name='newBodyPost'
                   placeholder={'Enter your text'}
                   validate={[required,maxLength15 ]}
            />
        </div>
        <div>
            <Button name={'Add post'}/>
        </div>
    </form>
}

export const AddNewPostReduxForm = reduxForm<PostFormDataType>({form: 'post'})(AddNewPostForm)
