import React from 'react'

const ToDo = props => {
    return (
        <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.completed ? 'finished' : ''}`}>
            <p>{props.items.task}</p>
        </div>
    )
}

export default ToDo