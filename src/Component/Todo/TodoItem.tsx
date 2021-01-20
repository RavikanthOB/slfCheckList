import React from 'react'
import { todoItemProps } from '../TodoTypes'

function TodoItem({item,onClick}:todoItemProps) {
    return (
        <div onClick={()=>onClick(item.Id)}>
            <h1 style={{textDecoration:item.isSelected?"line-through":"None"}}>{item.name}</h1>
        </div>
    )
}

export default TodoItem
