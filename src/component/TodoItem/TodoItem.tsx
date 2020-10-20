import React from 'react';


const TodoItem: React.FunctionComponent<todo> = (props) => {
    return(
        <div className="TodoItem">
            <h1 className="TodoItem--Text">{props.text}</h1>
        </div>
    )
}

export default TodoItem;