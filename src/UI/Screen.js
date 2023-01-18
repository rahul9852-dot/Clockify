
import React,{useState} from "react";
import { List } from "./List";
import "./Screen.css"
export default function Screen(){

    // state for handling input value
    const [value, setValue] = useState("");

    // state for handling setting todo.
    const [todo, setTodo] = useState([
        {
            text:"This is simple todo",
            isDone: false,
        }
    ]);


    // while changing input
    const onInputChanged = (event) => {
        console.log("event", event.target.value)
        setValue(event.target.value)
    }

    let count  = 1;

    // while adding todo
    const addToDo = (text) => {
        const newTodos = [...todo, {text}];
        setTodo(newTodos);
    }

    //  while hitting add button.
    const handleSubmit= (e)=> {
        console.log("Handlesubmit hit successfully!!!")
        e.preventDefault();
        if(!value) return;
        if(value){
            addToDo(value);
        }
        setValue("");
    }


    // Marking todo

    const markTodo = (idx) => {
        const newTodos = [...todo];
        newTodos[idx].isDone = true;
        setTodo(newTodos);
    }


    // Delete todo
    const deleteTodo = (idx) => {
        const newTodos = [...todo];
        newTodos.splice(idx, 1);
        setTodo(newTodos);
    }


    return (
        <div className="container">
            <h1>Show UI Screen</h1>
            <div className="inner-container">
            <input 
                className="input-box" 
                type="text"
                onChange={(event)=> {
                    onInputChanged(event)
                }}
            />
            <button 
                className="btn" 
                type="submit"
                onClick={(e)=> {
                handleSubmit(e)
            }}
            >
                Add
            </button>
            </div>
            <div className="span-text">
                <span>{count} Todos</span>
            </div>
            <List
                data={todo}
                // markTodo={markTodo}
                // deleteTodo={deleteTodo}
            />
        </div>

        
    )
}