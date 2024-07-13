import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    newTodoTitle: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: updatedTodosList})
  }

  addTodo = () => {
    const {todosList, newTodoTitle} = this.state
    if (newTodoTitle.trim() === '') return

    const [title, num] = newTodoTitle.split(' ')
    const numOfTodos = parseInt(num, 10) || 1
    const updatedTodosList = [...todosList]

    for (let i = 0; i < numOfTodos; i + 1) {
      updatedTodosList.push({
        id: updatedTodosList.length + 1,
        title,
      })
    }

    this.setState({
      todosList: updatedTodosList,
      newTodoTitle: '',
    })
  }

  handleChange = event => {
    this.setState({newTodoTitle: event.target.value})
  }

  render() {
    const {todosList, newTodoTitle} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <input
            type="text"
            value={newTodoTitle}
            onChange={this.handleChange}
            placeholder="Enter todo title and number (e.g., 'Buy milk 3')"
            className="todo-input"
          />
          <button type="button" onClick={this.addTodo} className="add-btn">
            Add
          </button>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
