import React, { Component } from 'react'
import { TodoStruct } from '../../types/TodoTypes';
import { v4 as uuidv4 } from 'uuid';

type Props = {
    handleAddTodo: (todo: TodoStruct) => void
}

type State = {
    todoName: string,
    finishDate: Date,
    dateAsString: string
}

export default class CreateTodo extends Component<Props, State> {
    
    constructor(props: Props){
        super(props);
        this.state = {
            todoName: "",
            finishDate: new Date(),
            dateAsString: new Date().toLocaleDateString("tr-TR")
        }
    }
    
    render() {
        return (
            <>
                <div className='flexColDiv'>
                    <label htmlFor="todo_desc">Todo Description</label>
                    <input id="todo_desc" type="text" placeholder='Name of Todo' value={this.state.todoName}
                        onChange={(e) => this.setState({...this.state, todoName: e.target.value})}
                    />
                </div>
                <div className='flexColDiv'>
                    <label htmlFor="todo_desc">Todo Finish Date</label>
                    <input type="date" lang="tr-TR"
                        onChange={(e) => 
                            this.setState({...this.state, 
                            finishDate: new Date(e.target.value)})}
                    />
                </div>
                <div className='flexColDiv'>
                    <button onClick={(e) => {
                        this.props.handleAddTodo({
                            todoName: this.state.todoName, 
                            finishDate: this.state.finishDate, 
                            completed: false,
                            id: uuidv4()});
                        this.setState({todoName: "", finishDate: new Date()})
                        }}>Add Todo</button>
                </div>
            </>
        )
    }
}
