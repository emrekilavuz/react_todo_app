import React, { Component } from 'react'
import { TodoStruct } from '../../types/TodoTypes'
import image from '../../assets/completed.jpg';

type State = {
    todoName: string,
    finishDate: Date,
    completed: boolean,
    id: string
}

type Props = {
    todoStruct: TodoStruct,
    handleChangeCompleted: (id: string) => void
}



export default class TodoEl extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            todoName: props.todoStruct.todoName,
            finishDate: props.todoStruct.finishDate,
            completed: props.todoStruct.completed,
            id: props.todoStruct.id
        }
    }

    render() {
        return (
            <div className='todoElContainer'>
                <div className='todoEl'>
                    <label>My Task [{this.state.id}]</label>
                    <h4 style={{textDecoration: this.state.completed ? "line-through" : "none"}}>{this.state.todoName}</h4>
                    <label>Finish Date</label>
                    <h4 style={{textDecoration: this.state.completed ? "line-through" : "none"}}>{(new Date(this.state.finishDate)).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        hour12: false
                    })}</h4>
                    <button onClick={(e) => this.props.handleChangeCompleted(this.state.id)}>Completed</button>
                </div>
                <div className='todoElImgContainer'>
                    {
                        this.state.completed && (
                            <img src={image} alt="completed"/>
                        )
                    }
                </div>
            </div>
        )
    }
}
