import React, {Component} from 'react';
import './App.css';
import './Header';
import Header from "./Header";

class App extends React.Component {
    state = {
        tasks: ['task 1', 'task 2', 'task 3']
    };
    render(){
        return (
            <div className="App">
                <h1> TodoList </h1>
                <Header numTodos={this.state.tasks.length}/>
            </div>
        );
    }
}

export default App;
