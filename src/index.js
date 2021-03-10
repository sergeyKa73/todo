import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/app-header';
import SearhPanel from './components/searh-panel';
import TodoList from './components/todo-list';


const App = () => {

    const todoData =[
        {label: 'Drink Coffee', important: false},
        {label: 'Make Awesome App', important: true},
        {label: 'Learn React', important: false}
    ]

    return (
        <div>
            <AppHeader/> 
            <SearhPanel/>
            <TodoList todos={todoData}/>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'));