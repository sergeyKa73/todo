import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Learn Raact</li>
            <li>Build Awesome App</li>
        </ul>
    )
}

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    )
}

const SearhPanel = () => {
    return (
        <input placeholder="search" />
    )
}

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearhPanel />
            <TodoList />
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'));