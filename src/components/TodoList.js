//used example from webguided project GroceryList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    const handleClick = () => {
        props.handleItemCompleted();
    }

    return (
        <div className='todo-list'>
            {props.TodoList.map(item => (
                <Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item} />
            ) )}
            <button className='clear-btn' onClick={handleClick}>
                Clear Task
            </button>
        </div>
    );
};

export default TodoList;
