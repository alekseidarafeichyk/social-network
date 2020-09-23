import React, {ChangeEvent} from 'react';


export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status,
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

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {

        if (prevProps.status !== this.props.status) {

            this.setState({
                    status: this.props.status
                }
            )
        }
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