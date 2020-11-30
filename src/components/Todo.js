import React from 'react'

const Todo = props => {
    return (
        <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.completed ? 'finished' : ''}`}>
            <p>{props.items.task}</p>
        </div>
    )
}

export default Todo