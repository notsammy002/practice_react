import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAPI } from "../hooks/useApi";
import TodoChecked from "./TodoChecked";


const Todo = () => {
    const { loading, error, data, fetchAPI, updateAPI, deleteTodo} = useAPI([])
    const [tasks, setTasks] = useState("");
    
    const [pageNumber, setPageNumber] = useState(1)

    const addTolist = () => {
        let payload = {
            tasks,
            createdAt: Date.now()
        };
        updateAPI(axios.post("http://localhost:3000/profile", payload)
        )
        .then(() => setTasks(""))
    }

    useEffect(() =>{
       fetchAPI(fetch(`http://localhost:3000/profile?_page=${pageNumber}&_limit=3`)) 
        
    }, [pageNumber]);

    

    
    if(loading) return <div>Loading...</div>
    else if(error) return <div>Error...</div>
    else
    return (
        <>
            <div>
                <label>Enter the task</label>
                <input type="text" 
                value={tasks} 
                onChange={(e) => setTasks(e.currentTarget.value)} />
                <button onClick={addTolist}>ADD</button>
            </div>
            <div>

                {data.map((todo) =>(
                    <TodoChecked key ={todo.id} value ={todo} deleteTodo= {deleteTodo}/>
                ))}

                <button onClick={()=>{
                    if(pageNumber > 1){
                        setPageNumber(pageNumber-1)
                    }
                }} >Previous Page</button>
                <button onClick={()=>{
                    setPageNumber(pageNumber+1)
                }} >Next Page</button>
            </div>
        </>
    )
}


export default Todo

/*{
        const addTolist = () => {
        let payload = {
            tasks,
            createdAt: Date.now()
        }
        fetch("http://localhost:3000/profile", {
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(payload),
        })
        .then((r) => r.json())
        .then((d) =>{
            console.log(d)
            setTodos([...todos, d]);
            setTasks("")
        })
        .catch((err) =>{
            console.log(err)
            //setError(true)
        })
        
    }

    useEffect(() =>{
        setLoading(true);
        fetch("http://localhost:3000/profile")
        .then((r) => r.json())
        .then((d) => {
            setTodos(d)
        })
        .catch((err) =>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false);
        })
    }, []);
    } */