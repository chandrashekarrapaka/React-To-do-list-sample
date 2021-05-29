import logo from './logo.svg';
import './App.css';
import Header from './MyCompnents/Header';
import {Todos} from './MyCompnents/Todos';
import {Footer} from './MyCompnents/Footer';
import {AddTodo} from './MyCompnents/AddTodo';
import {About} from './MyCompnents/About';
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
console.log("in all delete of todo",todo);
setTodos(todos.filter((e)=>{
  return e!==todo;
  
}));
localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
    //console.log("ïnside to do",title,desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
     sno=todos[todos.length-1].sno+1;
    }
    let myTodo={
      sno:sno,
      stuff:title,
      descr:desc
    }
    console.log("ïnside to do",myTodo)
    setTodos([...todos,myTodo]);
   
  }
  const[todos,setTodos]= useState(initTodo);
  useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  
  
  return (
    
    <>
    <Router>
     <Header/>
     <Switch>
     <Route exact path="/" render={()=>{
       return(
         <>
         <AddTodo addTodo={addTodo}/>
         <Todos todos={todos} onDelete={onDelete}/>
         </>
       )
     }}>
          </Route>
          <Route exactcf path="/about">
            <About />
          </Route>
         </Switch>
    
     <Footer/>
     </Router>
    </>
  );
}

export default App;

