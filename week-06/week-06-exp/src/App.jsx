import { useState } from "react";

function App(){
    const[todos, setTodos] = useState([
        {
            id: 1,
            title: "Go to gym",
            desc: "Go to gym today",
        },
        {
            id: 2,
            title: "Go to cafe",
            desc: "Go to cafe todayA,"
        },
        {
            id: 3,
            title: "Go to library",
            desc: "Go to lib todayA,"
        },
    ]);

    function addTodo(){
        setTodos([...todos, {
            id: 4,
            title: Math.random(),
            description: Math.random(),
        }]);
    }

    // Alternate way to write the previous function (syntax is less overwhelming)
    // UGLIER DEFINITELY
    function altAddTodos(){
        const newTodos = [];
        for(let i = 0; i < todos.length; i++){
            newTodos.push(todos[i]);
        }
        newTodos.push({
            id: 4,
            title: Math.random(),
            description: Math.random(),
        });
        setTodos(newTodos);
    }

    // Usage of Keys:
    // ------------------------------------------------------------------------
    // When using structures like arrays, when an array is re-ordered / sorted 
    // manipulated in any capacity then keys helps react to avoid re-rendering the 
    // entire list of components that were uniquely created with the elements of 
    // the list and instead of just changing the structure or ordering of components
    return(
        <div>
            <button onClick={addTodo}>Add a todo</button>
            {
                todos.map((todo) => (
                    <Todo 
                        title={todo.title} 
                        description={todo.description}
                        key={todo.id}
                    />
                ))}
        </div>
    );
}

function Todo({title, description}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default App;
