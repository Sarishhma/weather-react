import React from 'react'
export default function Todo({todo}){
    return (
        <>
            <h1>Todo List</h1>
  {todo.map( (todo)=>(
    <div key ={todo.sno}>
       <h1>{todo.sno}</h1> 
        <h2>{todo.Title}</h2>
       <h3>{todo.desc}</h3> 
    </div>
  )
  )

  }
        </>
    )
}
