import React from 'react'
import PropTypes from 'prop-types'

const Todo = (props) => (
  <li>
<<<<<<< HEAD
  <span
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? 'line-through' : 'none'
    }}
  >
    {props.text}
=======
    <span
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none'
      }}
    >
      {props.text}
>>>>>>> fbfde0cadbfe119f5e983b5006237476871e54d4
    </span>
    <button onClick={props.onRemove}>X</button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
