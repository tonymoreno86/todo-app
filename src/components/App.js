import React from 'react'
import TodoItem from './TodoItem';
import todoData from '../todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo, 
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(todo => {
      return (
        <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
      )
    })
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
