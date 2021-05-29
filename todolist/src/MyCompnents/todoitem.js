import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
    return (
        <div >
            <h4> {todo.stuff}</h4>
            <p>{todo.descr}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete </button>
        </div>
    )
}
