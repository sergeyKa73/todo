import React, { Component} from 'react';

import AppHeader from '../app-header';
import SearhPanel from '../searh-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';


import './app.css';
  

export default class App extends Component{

    maxId = 100;

    state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Home library') 
     ], 
      term:''
    };

    createTodoItem(label) {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
    }

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

    addIteam = (text) => {
      //generate id 
      const newItem = this.createTodoItem(text);
       // add element in array
       this.setState(({ todoData}) => {
         const newArr = [...todoData, newItem];

         return {
           todoData: newArr
         } 
       });
      
    }; 
    
    toggleProperty(arr, id, propName) {
      const idx = arr.findIndex((el) => el.id === id);
  // update object
      const oldItem = arr[idx];
      const newItem = {...oldItem,
        [propName]: !oldItem[propName]};
  // construct new array
      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
    }
    onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'done')
        };
      });
    };


    onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'important')
        };
      });
    };

    
    onSearchChange = (term) => {
      this.setState({ term });
    };

    search(items, term) { 
      if (term.length === 0) {
        return items;
      } 

      return items.filter((item) => {
        return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
      });
    }

    render() {
      const { todoData, term } = this.state;

      const visibleItems = this.search(todoData, term);
      const doneCount = todoData
                      .filter((el) => el.done).length;
      const todoCount = todoData.length - doneCount;

      return (
        <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearhPanel 
          onSearchChange={this.onSearchChange} />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
        todos={visibleItems}
        onDeleted={ this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone } />

        <ItemAddForm onItemAdded={ this.addIteam}/>
      </div>
    );
  }
};
 