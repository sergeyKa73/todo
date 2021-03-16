import React, { Component} from 'react';

import AppHeader from '../app-header';
import SearhPanel from '../searh-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
  

export default class App extends Component{

    state = {
      todoData: [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Learn React', important: false, id: 3}
     ]
    };

    deleteItem = (id) => {
     this.setState(({ todoData }) => {
       const idx = todoData.findIndex((el) => el.id === id );
     
       // [a, b, c, d, e]
       // [a, b,    d, e]
      //  const before = todoData.splice(0, idx);
      //  const after = todoData.splice(idx + 1);
      //  const newArray = [...before, ...after]

      const newArray = [
        ...todoData.splice(0, idx),
        ...todoData.splice(idx + 1)
      ];

       return {
         todoData: newArray
       };
     })
    };
    
    render() {
      return (
        <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearhPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
        todos={this.state.todoData}
        onDeleted={ this.deleteItem} />
      </div>
    );
  }
};
