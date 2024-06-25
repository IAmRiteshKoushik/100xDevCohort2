import { useEffect, useState } from "react";

const App = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todos")
            .then(async function(res){
                const json = await res.json();
                setTodos(json.todos);
            });
    }, []);

    return(
        <div>
            {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
        </div>
    );
}

function Todo({title, description}){
    return(
        <div></div>
    );
}

export default App;
