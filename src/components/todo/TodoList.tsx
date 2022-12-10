import React, { Component, PropsWithChildren } from 'react'
import TodoEl from './TodoEl';
import { TodoStruct } from '../../types/TodoTypes';

type Props = {
    todoList: TodoStruct[],
    handleChangeCompleted: (id: string) => void
}

type State = {
    todoList: TodoStruct[]
}

export default class TodoList extends Component<Props, State> {
  
    constructor(props:any) {
        super(props);
    }
  
    render() {
    return (
        
      <div>{this.props.todoList.map((todo, indx) => {
        return (<TodoEl handleChangeCompleted={this.props.handleChangeCompleted} todoStruct={todo} key={indx}/>);
    })}</div>
    )
  }
}
