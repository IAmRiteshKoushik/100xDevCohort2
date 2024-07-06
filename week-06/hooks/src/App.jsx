import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // fetch("https://sum-server.100xdevs.com/todos")
        //     .then(async function(res){
        //         const json = await res.json();
        //         setTodos(json.todos);
        //     });
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(function(res){
                setTodos(res.data.todos)
            })
    }, []);

    return(
        <div>
            {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
        </div>
    );
}

function Todo({title, description}){
    return(
        <div>
            {title}
            {description}
        </div>
    );
}

export default App;
