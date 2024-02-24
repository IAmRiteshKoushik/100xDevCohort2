import { useState } from "react";

// A way to handle if-else inside jsx components
// function NotificationComponent(props) {
//     return <div>
//         {props.notificationCount > 90 ? "99+" : props.notificationCount}
//     </div>
// }


// any time a parent re-renders, then the child 
// re renders as well.
function App() {

    // todos and setTodos are the things that useState returns
    // 
    const [todos, setTodos] = useState([{
        title: "Go to gym",
        description: "Go to gym from 7 - 9",
        completed: false,
    }, {
            title: "Study DSA",
            description: "Study DSA from 0-100",
            completed: true,
        }
    ]);

    function addTodo() {
        setTodos([...todos, {
            title: "new Todo",
            description: "description of new todo",
            completed: false
        }])
    }

    return(
        <div>
            <button onClick={addTodo}>Add a random todo</button>
            {
                todos.map(function(todo){
                    return <Todo title={todo.title} description={todo.description} ></Todo>
                })
            }
            <DummyButton />
        </div>
    );
}

// This takes no state variables as input,
// but it still re-renders 
function DummyButton(props) {
    console.log("Re-rendered the dummy button");
    return <button>Dummy Button</button>
}

// todo app, {
//  title,
//  description
//  complete
// }

function Todo(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    );
}

export default App
