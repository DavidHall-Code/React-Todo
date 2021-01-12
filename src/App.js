//used example from webguided project index.js

import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todoList: list
    }
  }

  handleItemToggle = itemId => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === itemId){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
      return item
      }    
  });
  this.setState({
    todoList: newTodoList
  })
  }
  
  handleItemAdd = (taskName) => {
    const task = {
      name: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [this.state.todoList, task]
    })
  }

  handleItemCompleted = () => {
    const newToDo = this.state.todoList.filter (item => {
      return(!item.completed)
    });
    this.setState({
      todoList: newToDo
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
      <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleItemAdd={this.handleItemAdd} />
      </div>
        <TodoList TodoList={this.state.todoList} handleItemCompleted={this.handleItemCompleted} handleItemToggle={this.handleItemtoggle} />
      </div>
    );
  }
}

export default App;
