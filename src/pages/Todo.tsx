import React, { Component } from 'react'
import CreateTodo from '../components/todo/CreateTodo'
import TodoList from '../components/todo/TodoList';
import { TodoStruct } from '../types/TodoTypes';

type State = {
    todoList: TodoStruct[]
}


export default class Todo extends Component<any, State> {

    constructor(props: any){
        super(props);
        this.state = {
            todoList: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")!) : []
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleChangeCompleted = this.handleChangeCompleted.bind(this);
    }


    handleAddTodo(todo: TodoStruct) {
        let newTodoList = [...this.state.todoList];
        this.setState({ todoList: [] }, () => this.setState({ todoList: [...newTodoList, todo] }));
        localStorage.setItem("todos", JSON.stringify([...newTodoList, todo]));
    }

    handleChangeCompleted(id: string) {
        let newTodoList = [...this.state.todoList];
        let newTodo = newTodoList.find(x => x.id === id);
        if (!newTodo) {
            return;
        }
        else {
            let indx = newTodoList.indexOf(newTodo);
            let newCompleted = newTodo.completed;
            newCompleted = !newCompleted;
            newTodo.completed = newCompleted;
            newTodoList[indx] = newTodo;
            this.setState({ todoList: [] }, () => this.setState({ todoList: newTodoList }));
            localStorage.setItem("todos", JSON.stringify([...newTodoList]));
        }

    }

    render() {
        return (
            <div>
                <CreateTodo handleAddTodo={this.handleAddTodo} />
                <TodoList handleChangeCompleted={this.handleChangeCompleted} todoList={this.state.todoList} />
            </div>
        )
    }
}
