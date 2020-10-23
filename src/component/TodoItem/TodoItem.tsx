import React from 'react';

import './TodoItem.css'

interface Props{
    todo: todo,
    check: (event: React.FormEvent<HTMLInputElement>) => void
}

const TodoItem: React.FunctionComponent<Props> = (props) => {
    return(
        <div className="TodoItem">
            <input className="TodoItem--Checkbox" type="checkbox" checked={props.todo.status} onChange={props.check} />
            <h1 className="TodoItem--Text">{props.todo.text}</h1>
        </div>
    )
}

export default TodoItem;