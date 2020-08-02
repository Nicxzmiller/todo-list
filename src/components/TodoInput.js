import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form>
                    <div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-list"></i>
                                </div>
                            </div>
                            <input type="text" className="form-control text-capitalize form-input shadow-none" placeholder="Add a todo item"/>
                        </div>
                        <button type="submit" className="btn btn-block btn-primary mt-3 shadow-none">Add Item</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoInput;