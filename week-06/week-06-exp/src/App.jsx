import React, { memo } from "react";
import { useState, Fragment } from "react";


function App() {
    const [title, setTitle] = useState("My name is Ritesh");
    function updateTitle(){
        setTitle("My name is " + Math.random());
    }

    return(
        // The Header cannot be used twice without haveing a parent element 
        // You need not have an extra div by just having empty tags <>
        // <> - best solution becomes does not introduce an extra DOM element
        // Alternatively, you can use something called as React.Fragment or import as Fragment

    <div>
        {/*<HeaderWithButton />*/}
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title}></Header>
        <Header title="Ritesh 04"></Header>
        <Header title="Ritesh 04"></Header>
        <Header title="Ritesh 04"></Header>
        <Header title="Ritesh 04"></Header>
        <Header title="Ritesh 04"></Header>
        <Header title="Ritesh 04"></Header>
        <Header title="Ritesh 04"></Header>
        <Header title="Ritesh 04"></Header>
        <Header title="Ritesh 04"></Header>
    </div>
    );
}

// Pushing down state variables down the component hierarchy
// so that we can avoid re-renders
// function HeaderWithButton() {
//     const [title, setTitle] = useState("My name is Ritesh");
//     function updateTitle(){
//         setTitle("My name is " + Math.random());
//     }
//
//     return (<div>
//     <button onClick={updateTitle}>Update the title</button>
//     <Header title={title}></Header>
//     </div>);
// }

const Header = memo(function Header({title}){
    return <div>
        {title}
    </div>
});

// The following function does not manage state well.
// function Header({title}){
//     return <div>
//     {title}
//     </div>
// }

export default App
