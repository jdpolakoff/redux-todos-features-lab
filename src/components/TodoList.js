import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <Todo
        key={todo.id}
        completed={todo.completed}
        text={todo.text}
        // {...todo}
        onClick={() => props.onTodoClick(todo.id)}
        onRemove={() => props.onRemoveTodo(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
