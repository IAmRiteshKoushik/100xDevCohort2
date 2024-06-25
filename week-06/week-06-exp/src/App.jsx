function App(){
    return(
        <>
            <CardWrapper>
                hi there
            </CardWrapper>
            <CardWrapper>
                <div>
                    hi there22
                </div>
            </CardWrapper>
        </>
    );
}

// One way to do it, but it is not done this way. The cleaner 
// syntax to do this would be as follows:
// function CardWrapper({innerComponent}){
//     return(
//         <div style={{border: "2px solid black", padding: 20}}>
//             {innerComponent} 
//         </div>
//     ); 
// }
//
// function TextComponent2(){
//     return(
//         <div>
//             hi there22
//         </div>
//     );
// }
// function TextComponent(){
//     return(
//         <div>
//             hi there
//         </div>
//     );
// }

function CardWrapper({children}){
    // children is a special prop which gives access to all the tags or text 
    // put in between the opening and closing tags
    console.log(children);
    return(
        <div style={{border: "2px solid black", padding: 20}}>
            {children}
        </div>
    );
}

export default App;
