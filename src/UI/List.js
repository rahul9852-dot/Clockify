
import React from "react";
import "./Screen.css"
export function List({data, markTodo, deleteTodo}){

    
    return (
            <>
            {data.map((item, idx)=> (
                <div className="todo" key={idx}>
                <span> {item.text}-{idx} </span>
                <div class="inline-btn"> 
                    <button variant="outline-success" >✔️</button>
                    <button variant="outline-danger" >❌</button>
                </div>
                </div>
            ))}
            </>
    )
}