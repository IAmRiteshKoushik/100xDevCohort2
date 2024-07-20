import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {

    // Prop drilling, passing props from parent -> child -> grandchild and so on...
    // This gets visually and syntactically unappealing. Code gets verbose
    // Better use Least Common Ancestor (LCA)
    const [count, setCount] = useState(0);

    return(
        <div>
            {/* This is the teleporter */}
            <CountContext.Provider value={{ count, setCount }}>
                <Count setCount={setCount} />
            </CountContext.Provider>
        </div>
    );
}

// For using ContextAPI, you need to wrap it inside a context-provider
function Count({ setCount }){
    return(
        <div>
            <CountRenderer />
            <Buttons setCount={setCount}/>
        </div>
    );
}

function CountRenderer(){
    const count = useContext(CountContext);
    return(
        <div>
            {count}
        </div>
    );
}

function Buttons(){
    const { count, setCount } = useContext(CountContext);
    return(
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>Increase</button>
            <button onClick={() => {
                setCount(count - 1);
            }}>Decrease</button>
        </div>
    );
}

export default App
