import { useState } from 'react'
import './App.css'
import Todo from './components/todo'
import TodoForm from './components/todoForm'
import Search from './components/search'
import Filter from './components/filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      category: 'study',
      completed: false
    },
    {
      id: 2,
      text: 'Learn React',
      category: 'study',
      completed: false
    }
  ]
  )

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [order, setOrder] = useState("Asc")

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000) + 1,
        text,
        category,
        completed: false,
      }
    ]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filter = newTodos.filter((todo) => 
      todo.id == id ? null : todo
    )
    setTodos(filter)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]

    newTodos.map((todo) => {
      todo.id == id ? todo.completed = !todo.completed : todo;
    })

    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Todo App</h1>
      <Search  search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter = {setFilter} setOrder = {setOrder}/>
      <div className="todo-list">
        {todos
        .filter((todo) => filter == "All" ? todo : filter == "Completos" ? todo.completed : !todo.completed)
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a,b) => order === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map(todo => (
          <Todo key={todo.id} Todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
