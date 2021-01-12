//used example from webguided project item.js

import React from 'react';

const Todo = props => {
    const handleClick = () => {
        props.handleItemToggle(props.item.id)
    }

    return(
        <div onClick={handleClick} className={`item${props.item.completed ? 'complete' : ''} `}>
            <p>{props.item.task}</p>

        </div>
    );
};

export default Todo;