import React, { Component } from 'react'
import { TodoStruct } from '../../types/TodoTypes'
import image from '../../assets/completed.jpg';

type State = {
}

type Props = {
    todoStruct: TodoStruct,
    handleChangeCompleted: (id: string) => void
}



export default class TodoEl extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='todoElContainer'>
                <div className='todoEl'>
                    <label>My Task [{this.props.todoStruct.id}]</label>
                    <h4 style={{textDecoration: this.props.todoStruct.completed ? "line-through" : "none"}}>{this.props.todoStruct.todoName}</h4>
                    <label>Finish Date</label>
                    <h4 style={{textDecoration: this.props.todoStruct.completed ? "line-through" : "none"}}>{(new Date(this.props.todoStruct.finishDate)).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        hour12: false
                    })}</h4>
                    <button onClick={(e) => this.props.handleChangeCompleted(this.props.todoStruct.id)}>Completed</button>
                </div>
                <div className='todoElImgContainer'>
                    {
                        this.props.todoStruct.completed && (
                            <img src={image} alt="completed"/>
                        )
                    }
                </div>
            </div>
        )
    }
}
