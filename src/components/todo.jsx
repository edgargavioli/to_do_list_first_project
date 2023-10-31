import React from 'react'

const todo = ({Todo, removeTodo, completeTodo}) => {
  return (
            <div className="todo" style={{textDecoration: Todo.completed ? "line-through" : ""}}>
              <div className='content'>
                <p>{Todo.text}</p>
                <p className="category">({Todo.category})</p>
              </div>
              <div>  
                <button className='completed' onClick={() => completeTodo(Todo.id)}>Completar</button>
                <button className='remove' onClick={() => removeTodo(Todo.id)}>x</button>
              </div>
            <div>
              </div>
            </div>
  )
}

export default todo