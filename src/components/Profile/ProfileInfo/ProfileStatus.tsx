import React, {ChangeEvent} from 'react';


type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

type ProfileStatusPropsType = {
    status: string
    changeUserStatus: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    state = {
        editMode: false,
        status: this.props.status,
    }


    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>) {
        if (prevProps.status !== this.props.status) {

            this.setState({
                    status: this.props.status
                }
            )
        }
    }


    onEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    offEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        this.props.changeUserStatus(this.state.status)
    }

    onChangeStatusText = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
                status: e.currentTarget.value
            }
        )
    }


    render() {
        console.log('render')
        return (
            <>
                {
                    this.state.editMode ?
                        <div>
                            <input onBlur={this.offEditMode}
                                   type="text"
                                   autoFocus
                                   value={this.state.status}
                                   onChange={this.onChangeStatusText}
                            />
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.onEditMode}>{this.props.status || 'No status'}</span>
                        </div>

                }
            </>
        )
    }
}