import React from 'react';

interface Props{
    todo: todo,
    check: (event: React.FormEvent<HTMLInputElement>) => void
}

const TodoItem: React.FunctionComponent<Props> = (props) => {
    return(
        <div className="TodoItem">
            <h1 className="TodoItem--Text">{props.todo.text}</h1>
            <input className="TodoItem--Checkbox" type="checkbox" checked={props.todo.status} onChange={props.check} />
        </div>
    )
}

export default TodoItem;