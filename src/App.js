// import logo from './logo.svg';
import './App.css';
import { useState  ,useEffect } from 'react';
import Loading from './components/Loading';
import axios from "axios";
import TodoList from "./components/TodoList"


function App() {
  const [todos,setTodos] =useState([]);

  useEffect(()=>{
    
    axios.get("https://jsonplaceholder.typicode.com/todos") .then((result)=>{
      setTodos(result.data)});
  },[])


  return <div>{todos ? <TodoList todos ={todos} />: <Loading />}</div>;
  
}

export default App;
