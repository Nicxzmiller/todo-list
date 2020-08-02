import React from 'react';

const Todo = (props) => {
    return(
        <div className="card-header">
            {props.content}
            <button class="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}}>

            </button>
        </div>
    )
}

export default Todo;