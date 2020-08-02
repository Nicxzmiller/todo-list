import React from 'react';

const Todo = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })

    return(
        <div className="card-header">
            {props.content}
            <button class="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}}>

            </button>
        </div>
    )
}

export default Todo;