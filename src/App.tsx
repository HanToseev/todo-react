import React from 'react';
import './App.css';
import TodoItem from "./components/TodoItem/TodoItem";
import AddTask from "./components/AddTask/AddTask";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <h1>todos</h1>
            <AddTask/>

           <ul>
               <TodoItem/>
           </ul>

            <Footer/>
        </div>
    );
}

export default App;
