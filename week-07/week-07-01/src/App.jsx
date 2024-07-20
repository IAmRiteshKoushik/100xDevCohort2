import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {

    // Suspense API - If a component is not there yet, then render the fallback 
    // component. This can involve a simple "loading" animation or "skeletons"
    return (
        <div>
            <BrowserRouter>
                {/* You can add other components inside BrowserRouter */}
                <Appbar />
                <Routes>
                    <Route path="/dashboard" element={
                        <Suspense fallback={"loading..."}>
                            <Dashboard />
                        </Suspense>
                    }/>
                    <Route path="/" element={
                        <Suspense fallback={"loading..."}>
                            <Landing />
                        </Suspense>
                    }/>
                </Routes> 
            </BrowserRouter>
        </div>
    );
}

function Appbar() {

    // While you can use window.location.href = ""; this essentially means 
    // that you are fetching the entire page in a separate tab. You are not 
    // routing, you are basically opening a new page. 

    // In-order to navigate, we use the "useNavigate" hook provided by 
    // react-router-dom
    const navigate = useNavigate();

    // PROBLEM : You cannot use useNavigate outside of browser-router. This 
    // hook is designed to work inside it ONLY
    
    return(
        <div>
            <button onClick={() => {
                navigate("/");
            }}>Landing Page</button>

            <button onClick={() => {
                navigate("/dashboard");
            }}>Dashboard Page</button>

        </div>
    );
}

export default App
