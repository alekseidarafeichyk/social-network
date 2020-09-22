import React from 'react';

export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
    }

    toggleEditMode = () => {
        this.setState({
            editMode : !this.state.editMode
        })
    }

    render() {
        return (
            <>
                {
                    this.state.editMode ?
                        <div>
                            <input onBlur={this.toggleEditMode} type="text" value={'2'} autoFocus/>
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.toggleEditMode}>23</span>
                        </div>

                }
            </>
        )
    }
}