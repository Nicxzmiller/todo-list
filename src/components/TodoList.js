import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        return (
           <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">Todo List</h3>
               <TodoItem/>
               <button type="button" className="btn btn-block btn-danger mt-3 shadow-none text-capitalize">Clear List</button>
           </ul>
        );
    }
}

export default TodoList;