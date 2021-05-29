import React from 'react'
import {Todoitem} from './todoitem';
export const Todos = (props) => {
    const mystyle={
        minHeight:"70vh",
        margin:"40px auto"
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h3 className=" my-3">To-do List</h3>
            {props.todos.length===0?<h3>No To Do to Display</h3>:
               props.todos.map((todo)=> {
                return (
                    <>
                <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
                </>
                )

            })}
            
        </div>
    )
}
