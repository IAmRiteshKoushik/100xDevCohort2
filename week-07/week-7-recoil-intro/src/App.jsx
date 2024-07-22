import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

    return (
        <div>
            {/* Wrapper - instead of ContextName.Provider */}
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </div>
    );
}

function Count(){

    return(
        <div>
            <CountRenderer />
            <Buttons />
        </div>
    );
}

function CountRenderer(){
    // Does not re-render (unlike the ContextAPI) 
    const count = useRecoilValue(countAtom);
    // Other hooks -
    // useSetRecoilState
    // useRcoilState

    return(
        <div>
            <b>{count}</b>
            <EvenCountRenderer />
        </div>
    );
}

function Buttons(){
    // Inside the setCount, the value is automatically fetched whenever the 
    // function is called (i.e."count")
    const setCount = useSetRecoilState(countAtom);
    console.log("Buttons re-rendered")

    return(
        <div>
            <button onClick={() => {
                setCount(count => count + 1);
            }}>Increase</button>
            <button onClick={() => {
                setCount(count => count - 1);
            }}>Decrease</button>
        </div>
    )
}

function EvenCountRenderer(){
    // const count = useRecoilValue(countAtom);
    
    // Solution 1 (in-elegant)
    // if(count % 2 == 0){
    //     return <div>It is even</div>
    // }

    // Solution 2 (in-elegant)
    // return(
    //     <div>
    //         {(count % 2 == 0) ? "It is even" : null}
    //     </div>
    // );

    // Solution 3 - Handling derived state (react-way)
    // const isEven = useMemo(() => {
    //     return count % 2 == 0
    // }, [count])

    // Solution 4 - Selectors (recoil-way)
    const isEven = useRecoilValue(evenSelector);
    return(
        <div>
            {isEven ? "It is even" : null}
        </div>
    );
}

export default App
