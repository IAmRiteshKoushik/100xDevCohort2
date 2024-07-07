import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [selectedId, setSelectedId] = useState(1);

    return(
        <div>
            <button onClick={() => selectedId(1)}>1</button>
            <button onClick={() => selectedId(2)}>2</button>
            <button onClick={() => selectedId(3)}>3</button>
            <button onClick={() => selectedId(4)}>4</button>
            <Todo id={selectedId}/>
        </div>
    );
}

function Todo({id}){
    const [todo, setTodo] = useState({});

    // implement effect here
    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then(response => {
                setTodo(response.data.todo);
            });

    }, [id]);

    return(
        <div>

        </div>
    );
}

export default App;
