import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const [isEditing, setIsEditing] = useState(false)
  const [todoTitle, setTodoTitle] = useState(title)
  const [isCompleted, setIsCompleted] = useState(false)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onEditTodo = () => {
    setIsEditing(true)
  }

  const onSaveTodo = () => {
    setIsEditing(false)
  }

  const handleChange = event => {
    setTodoTitle(event.target.value)
  }

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted)
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
        className="complete-checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={todoTitle}
          onChange={handleChange}
          className="edit-input"
        />
      ) : (
        <p className={`title ${isCompleted ? 'completed' : ''}`}>{todoTitle}</p>
      )}
      {isEditing ? (
        <button type="button" className="save-btn" onClick={onSaveTodo}>
          Save
        </button>
      ) : (
        <button type="button" className="edit-btn" onClick={onEditTodo}>
          Edit
        </button>
      )}
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
