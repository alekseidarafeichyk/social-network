import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/store';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';


type MessageFormDataType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               name='newMessageBody'
               placeholder={'Enter your message'}
               validate={[required,maxLength100]}

        />
        <button>add message</button>
    </form>
}

const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: 'message'})(AddMessageForm)


type DialogsPropsType = {
    dialogsPage: DialogsPageType,
    isAuth: boolean
    addMessage: (text: string) => void
}


function Dialogs(props: DialogsPropsType) {
    let messagesElements = props.dialogsPage.messages.map(message => <Message key={message.id}
                                                                              message={message.message}/>)
    let dialogsElement = props.dialogsPage.dialogs.map(user => <DialogItem key={user.id} name={user.name}
                                                                           id={user.id}/>)


    const addNewMessage = (formData: MessageFormDataType) => {
        props.addMessage(formData.newMessageBody)
        console.log(formData)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    );
}

export default Dialogs;