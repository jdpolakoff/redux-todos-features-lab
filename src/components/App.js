import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import FilterField from '../containers/FilterField'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <FilterField />
    <Footer />
  </div>
)

export default App
