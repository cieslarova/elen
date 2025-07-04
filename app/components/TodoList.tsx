'use client'

import { useState } from "react"

export default function TodoList() {
    const [todos, setTodos] = useState<string[]>([])
    const [todo, setTodo]=useState("")

    function handleSave(){
        setTodos([...todos,todo])
    }

    return(
        <div className="todo-list">
            <div>
                <ul>
                   {todos.map((todo,idx) => <li key={idx}>{todo}</li>)}
                </ul>
                <input type="text" className="input" onChange={(e) => setTodo(e.target.value)}/>
                <button className="save" onClick={handleSave}>ulozit</button>
            </div>
        </div>
    )
}