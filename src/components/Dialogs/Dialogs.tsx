import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form';
import {Textarea} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {DialogType, MessageType} from '../../reducers/DialogsReducer/dialogs-reducer';
import {Button} from '../common/Button/Button';
import {useDispatch} from 'react-redux';


type MessageFormDataType = {
    newMessageBody: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessageText: string,
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               name='newMessageBody'
               placeholder={'Enter your message'}
               validate={[required, maxLength100]}

        />
        <Button name={'Add message'}/>
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
   const dispatch = useDispatch()

    const addNewMessage = (formData: MessageFormDataType) => {
        props.addMessage(formData.newMessageBody)
        dispatch(reset('message'))
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messageForm}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>

    );
}

export default Dialogs;