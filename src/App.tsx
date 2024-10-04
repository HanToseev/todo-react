import React from 'react';
import './App.css';
import TodoItems from "./components/TodoItems/TodoItems";
import AddTask from "./components/AddTask/AddTask";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <section className="App">
            <h1>todos</h1>
            <div className="todo">
                <AddTask/>
                <TodoItems/>
                <Footer/>
            </div>
        </section>
    );
}

export default App;
