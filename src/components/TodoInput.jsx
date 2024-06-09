// export default function TodoInput(props){
//     const { handleAddTodos } = props
//     return (
//         <header>
//             <input placeholder="Enter todo..." />
//             <button onClick={() => {
//                 handleAddTodos()
//             }}>Add</button>
//         </header>
//     )
// }

import { useState  } from "react";

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <header>
            <input value={todoValue} onChange={(e) =>{
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}