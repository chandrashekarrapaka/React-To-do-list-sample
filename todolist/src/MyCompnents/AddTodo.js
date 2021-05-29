//import React from 'react';
import React,{useState} from 'react';
 


export const AddTodo = (props) => {
        // let title="";
    // let desc="";
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=> {
        e.preventDefault();
        if(!title||!desc){
            alert("Title or Desc cannot be empty");
        }
        else{
        props.addTodo(title,desc);
        settitle("");
        setdesc("");
        }
    }


    return (
        <div className="container">
            <form onSubmit={submit} >
  <div className="mb-3">
    <label htmlFor="title" className="form-label">To-do Title</label>
    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">To-do Description</label>
    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc"/>
  </div> 
  <button type="submit" className="btn btn-sm btn-success">Add To-do</button>
</form>
        </div>
    )
}
